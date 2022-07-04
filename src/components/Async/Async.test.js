import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("should render posts", async () => {
    //Arrange
    render(<Async />);

    //Act
    // ... nothing

    //Assert
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });
});
