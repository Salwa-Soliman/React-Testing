import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
describe("Greeting Component", () => {
  test("should render hello world", () => {
    // Arrange
    render(<Greeting />);

    //   Act
    // ... nothing

    // Assert
    const helloWorldText = screen.getByText("hello world", { exact: false });
    expect(helloWorldText).toBeInTheDocument();
  });

  test("Renders Original Text when button is NOT clicked", () => {
    render(<Greeting />);

    const originalText = screen.getByText("It's good to see you!");
    expect(originalText).toBeInTheDocument();
  });

  test("should change text when button is clicked", () => {
    // Arrange
    render(<Greeting />);
    
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    
    // Assert
    expect(
      screen.getByText("Text Changed", { exact: false })
    ).toBeInTheDocument();
  });

  test("should not render good to see you when button is clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    
    // Assert
    expect(screen.queryByText("good to see you", { exact: false })).toBeNull();
  });
});
