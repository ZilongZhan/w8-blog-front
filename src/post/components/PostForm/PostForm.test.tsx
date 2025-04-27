import { render, screen } from "@testing-library/react";
import PostForm from "./PostForm";
import userEvent from "@testing-library/user-event";

describe("Given the PostForm component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Recipe info' inside a heading", () => {
      const expectedHeading = /recipe info/i;

      render(<PostForm />);

      const formHeading = screen.getByRole("heading", {
        name: expectedHeading,
      });

      expect(formHeading).toBeInTheDocument();
    });

    test("Then it should show a 'Title' input", () => {
      const inputLabel = /^title/i;

      render(<PostForm />);

      const titleInput = screen.getByLabelText(inputLabel);

      expect(titleInput).toBeInTheDocument();
    });

    test("Then it should show a 'Add recipe' button", () => {
      const buttonText = /add recipe/i;

      render(<PostForm />);

      const addRecipeButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(addRecipeButton).toBeInTheDocument();
    });

    describe("And the user types 'Hello world' inside the 'Title' input", () => {
      test("Then it should show 'Hello world' inside the 'Title' input", async () => {
        const expectedValue = "Hello world";
        const user = userEvent.setup();

        render(<PostForm />);

        const titleInput = screen.getByLabelText(/^title/i);

        await user.type(titleInput, expectedValue);

        expect(titleInput).toHaveValue(expectedValue);
      });
    });
  });
});
