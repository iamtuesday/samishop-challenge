import { render, screen } from "@testing-library/react";

import { Button } from "../components/atoms";

describe("Button", () => {
  beforeEach(() => {
    render(
      <Button
        className="bg-black"
        onClick={() => console.log("Load more characters")}
      >
        Load more characters
      </Button>
    );
  });

  test("should show the button component", () => {
    expect(screen.getByText("Load more characters")).toBeDefined();
  });

});
