import { render, screen } from "@testing-library/react";
import UserDetailSkeleton from "../user-detail-skeleton";
import ErrorComponent from "@/app/users/[id]/error";

test("renders loading skeleton", () => {
  render(<UserDetailSkeleton />);
  expect(screen.getAllByTestId("skeleton").length).toBeGreaterThan(0);
});

test("renders error component", () => {
  const dummyReset = jest.fn();
  render(<ErrorComponent error={new Error("Test")} reset={dummyReset} />);
  expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
});
