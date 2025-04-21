import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Rice Cooking 🍚' as heading level 1", () => {
      const expectedAppTitle = "Rice Cooking 🍚";

      render(<Header />);

      const appTitle = screen.getByRole("heading", {
        name: expectedAppTitle,
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });
  });
});
