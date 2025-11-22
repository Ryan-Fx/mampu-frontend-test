import { render, screen } from "@testing-library/react";
import UsersSkeleton from "../users-skeleton";
import ErrorComponent from "@/app/users/error";

describe("Users Loading and Error Components", () => {
  describe("UsersSkeleton (Loading)", () => {
    beforeEach(() => {
      render(<UsersSkeleton />);
    });

    it("renders multiple skeletons for desktop table rows", () => {
      const desktopSkeletons = screen
        .getAllByTestId("skeleton")
        .filter((el) => el.closest("table"));
      expect(desktopSkeletons.length).toBeGreaterThanOrEqual(24);
    });

    it("renders multiple skeletons for mobile cards", () => {
      const mobileSkeletons = screen.getAllByTestId("skeleton").filter(
        (el) => el.closest(".md\\:hidden") // pilih container mobile
      );
      expect(mobileSkeletons.length).toBeGreaterThanOrEqual(15);
    });

    it("renders at least one skeleton overall", () => {
      const skeletons = screen.getAllByTestId("skeleton");
      expect(skeletons.length).toBeGreaterThan(0);
    });
  });

  describe("Error Component", () => {
    it("renders Error component with proper message and reset button", () => {
      const dummyError = new Error("Test error");
      const dummyReset = jest.fn();

      render(<ErrorComponent error={dummyError} reset={dummyReset} />);

      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
      const resetButton = screen.getByRole("button", { name: /try again/i });
      expect(resetButton).toBeInTheDocument();
    });
  });
});
