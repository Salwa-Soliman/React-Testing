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

  test("mocking fetch method", async () => {
    //Arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });

    render(<Async />);

    //Act
    // ... nothing

    //Assert
    const listItems = await screen.findAllByRole("listitem");

    expect(listItems).toHaveLength(1);
    expect(listItems).not.toHaveLength(0);
  });
});
