import { render, screen } from "@testing-library/react";
import UserDetailSkeleton from "../user-detail-skeleton";
import UserDetailPageClient from "../user-detail-page-client";
import ErrorComponent from "@/app/users/[id]/error";

const dummyUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
  },
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
};

describe("User Detail Page Client", () => {
  it("renders user details correctly", () => {
    render(<UserDetailPageClient user={dummyUser} />);

    expect(screen.getByText(dummyUser.name)).toBeInTheDocument();
    expect(screen.getByText(dummyUser.username)).toBeInTheDocument();
    expect(screen.getByText(dummyUser.email)).toBeInTheDocument();
    expect(screen.getByText(dummyUser.phone)).toBeInTheDocument();
    expect(screen.getByText(dummyUser.company.name)).toBeInTheDocument();
  });
});

describe("UserDetailSkeleton", () => {
  it("renders loading skeletons", () => {
    render(<UserDetailSkeleton />);
    expect(screen.getAllByTestId("skeleton").length).toBeGreaterThan(0);
  });
});

describe("Error Component", () => {
  it("renders error message and reset button", () => {
    const dummyReset = jest.fn();
    render(
      <ErrorComponent error={new Error("Test error")} reset={dummyReset} />
    );
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });
});
