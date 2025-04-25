import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Oops! The page you're looking for doesn't exist'", () => {
      const expectedMessage = new RegExp(
        "Oops! The page you're looking for doesn't exist",
        "i",
      );

      render(<NotFoundPage />);

      const notFoundMessage = screen.getByText(expectedMessage);

      expect(notFoundMessage).toBeVisible();
    });
  });
});
