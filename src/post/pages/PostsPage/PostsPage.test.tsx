import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import PostsPage from "./PostsPage";

describe("Given the PostsPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'All our recipies' in a heading", () => {
      const expectedHeadingText = /all our recipies/i;

      render(<PostsPage />, { wrapper: MemoryRouter });

      const postsPageTitle = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(postsPageTitle).toBeInTheDocument();
    });
  });
});
