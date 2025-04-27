import { render, screen } from "@testing-library/react";
import PostFormPage from "./PostFormPage";

describe("Given the PostFormPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Write a new recipe' inside a heading", () => {
      const pageTitleText = /write a new recipe/i;

      render(<PostFormPage />);

      const pageTitle = screen.getByRole("heading", {
        name: pageTitleText,
      });

      expect(pageTitle).toBeInTheDocument();
    });

    test("Then it should show 'Recipe info' inside a heading", () => {
      const formTitleText = /recipe info/i;

      render(<PostFormPage />);

      const formTitle = screen.getByRole("heading", { name: formTitleText });

      expect(formTitle).toBeInTheDocument();
    });
  });
});
