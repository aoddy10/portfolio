import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

it("should have hero section", () => {
  render(<Home />);

  const myElement = screen.getByText("Hello, I'm Anirut.");

  expect(myElement).toBeInTheDocument();
});
