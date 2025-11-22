import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import * as api from "@/lib/api";
import type { User } from "@/types/user";
import UserPage from "@/app/users/page";

const mockUsers: User[] = [
  {
    id: 1,
    name: "Ryan",
    username: "ryan123",
    email: "ryan@mail.com",
    phone: "08123456789",
    website: "ryann.dev",
    company: { name: "Ryan Inc", catchPhrase: "Build stuff" },
    address: {
      street: "Jl. Example",
      suite: "Suite 1",
      city: "Jakarta",
      zipcode: "12345",
    },
  },
  {
    id: 2,
    name: "Bella",
    username: "bella123",
    email: "bella@mail.com",
    phone: "081987654321",
    website: "bella.dev",
    company: { name: "Bella Corp", catchPhrase: "Make things" },
    address: {
      street: "Jl. Test",
      suite: "Suite 2",
      city: "Bandung",
      zipcode: "54321",
    },
  },
];

// mock getUsers
jest.mock("@/lib/api", () => ({
  getUsers: jest.fn(),
}));

describe("UserPage - Render Rows", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders all users in the table and mobile cards", async () => {
    // Mock API resolved value
    (api.getUsers as jest.Mock).mockResolvedValue(mockUsers);

    render(<UserPage />);

    // Tunggu sampai user muncul di DOM
    await waitFor(() => {
      // Desktop table check
      expect(screen.getByText("Ryan")).toBeInTheDocument();
      expect(screen.getByText("Bella")).toBeInTheDocument();

      expect(screen.getByText("ryan@mail.com")).toBeInTheDocument();
      expect(screen.getByText("bella@mail.com")).toBeInTheDocument();

      expect(screen.getByText("ryann.dev")).toBeInTheDocument();
      expect(screen.getByText("bella.dev")).toBeInTheDocument();

      // Mobile card view (cek salah satu)
      expect(screen.getAllByText(/Ryan|Bella/).length).toBeGreaterThanOrEqual(
        2
      );
    });
  });
});
