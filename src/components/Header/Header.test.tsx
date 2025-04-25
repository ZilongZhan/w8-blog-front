import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Rice Cooking' as heading level 1", () => {
      const expectedHeadingText = /rice cooking/i;

      render(<Header />, { wrapper: MemoryRouter });

      const appTitle = screen.getByRole("heading", {
        name: expectedHeadingText,
        level: 1,
      });

      expect(appTitle).toBeInTheDocument();
    });
  });
});
