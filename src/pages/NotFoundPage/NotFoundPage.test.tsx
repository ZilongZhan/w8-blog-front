import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Oops! The page you're looking for doesn't exist'", () => {
      const expectedMessage =
        /oops! the page you're looking for doesn't exist/i;

      render(<NotFoundPage />);

      const notFoundMessage = screen.getByText(expectedMessage);

      expect(notFoundMessage).toBeInTheDocument();
    });

    test("Then it should show an empty plate with a sad face", () => {
      const expectedImage = /an empty plate with a sad face/i;

      render(<NotFoundPage />);

      const notFoundImage = screen.getByAltText(expectedImage);

      expect(notFoundImage).toBeInTheDocument();
    });
  });
});
