import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Layout from "./Layout";

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Rice Cooking' as heading level 1", () => {
      const expectedAppTitle = "rice cooking";

      render(<Layout />, { wrapper: MemoryRouter });

      const appTitle = screen.getByRole("heading", {
        name: new RegExp(expectedAppTitle, "i"),
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });
  });
});
