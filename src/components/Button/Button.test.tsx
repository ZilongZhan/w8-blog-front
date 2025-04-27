import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Given the button component", () => {
  describe("When it receives 'Hello world' and an action", () => {
    const buttonText = /hello world/i;

    test("Then it should show a 'Hello world' button", () => {
      render(<Button children="Hello world" />);

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });

    describe("And the user clicks the 'Hello world' button", () => {
      test("Then the action should be called", async () => {
        const action = vitest.fn();
        const user = userEvent.setup();

        render(<Button children="Hello world" action={action} />);

        const button = screen.getByRole("button", { name: buttonText });

        await user.click(button);

        expect(action).toHaveBeenCalled();
      });
    });
  });
});
