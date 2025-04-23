import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Rice Cooking' as heading level 1", () => {
      const expectedHeadingText = "rice cooking";

      render(<Header />, { wrapper: MemoryRouter });

      const appTitle = screen.getByRole("heading", {
        name: new RegExp(expectedHeadingText, "i"),
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });
  });
});
