import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Navigator from "./Navigator";

describe("Given the Navigator component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Posts' link", () => {
      const expectedLinkText = /posts/i;

      render(<Navigator />, { wrapper: MemoryRouter });

      const postsLink = screen.getByRole("link", {
        name: expectedLinkText,
      });

      expect(postsLink).toBeVisible();
    });
  });
});
