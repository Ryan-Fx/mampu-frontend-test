import { render, screen, fireEvent } from "@testing-library/react";
import UsersTable from "../users-table";
import type { User } from "@/types/user";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("UsersTable", () => {
  const mockUsers: User[] = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
      },
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
      },
    },
  ];

  const pushMock = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
    pushMock.mockClear();
  });

  it("renders all desktop user rows", () => {
    render(<UsersTable users={mockUsers} />);

    mockUsers.forEach((user) => {
      // Ambil row desktop
      const row = screen.getByTestId(`desktop-user-row-${user.id}`);
      expect(row).toBeInTheDocument();
      expect(row).toHaveTextContent(user.name);
      expect(row).toHaveTextContent(user.email);
      expect(row).toHaveTextContent(user.website);
    });
  });

  it("filters users based on search input", () => {
    render(<UsersTable users={mockUsers} />);
    const searchInput = screen.getByPlaceholderText(/search name or email/i);

    // cari "Leanne"
    fireEvent.change(searchInput, { target: { value: "Leanne" } });
    const row = screen.getByTestId(`desktop-user-row-1`);
    expect(row).toBeInTheDocument();
    expect(row).toHaveTextContent("Leanne Graham");

    // yang lain tidak muncul
    expect(screen.queryByTestId("desktop-user-row-2")).toBeNull();
    expect(screen.queryByTestId("desktop-user-row-3")).toBeNull();

    // reset search → semua muncul
    fireEvent.change(searchInput, { target: { value: "" } });
    mockUsers.forEach((user) => {
      const row = screen.getByTestId(`desktop-user-row-${user.id}`);
      expect(row).toBeInTheDocument();
    });
  });
});
