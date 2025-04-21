import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given the Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Rice Cooking' as heading level 1", () => {
      render(<Layout />);

      const appTitle = screen.getByRole("heading", {
        name: /rice cooking/i,
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });
  });
});
