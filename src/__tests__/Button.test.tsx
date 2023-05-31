import { render, screen } from "@testing-library/react";

import { Button } from "../components/atoms";

describe("Button", () => {
  beforeEach(() => {
    render(<Button className="bg-black">Hello World</Button>);
  });

  test("should show the button component", () => {
    expect(screen.getByText("Hello World")).toBeDefined();
  });
  
  // test("should have the correct class", () => {
  //   expect(screen.queryByText(/content/i)).toBeNull();
  // });
  

});
