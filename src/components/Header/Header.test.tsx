import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Rice Cooking' as heading level 1", () => {
      render(<Header />);

      const appTitle = screen.getByRole("heading", {
        name: /rice cooking/i,
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });
  });
});
