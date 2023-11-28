import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

it("should have hero section", () => {
  // Arrange
  render(<Home />);

  // Action
  const myElement = screen.getByText("Hello, I'm Anirut.");

  // Assert
  expect(myElement).toBeInTheDocument();
});
