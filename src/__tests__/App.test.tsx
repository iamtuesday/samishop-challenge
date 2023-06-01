import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../App.tsx";

test("full app rendering/navigating", async () => {
  render(<App />, { wrapper: MemoryRouter });
  const user = userEvent.setup();

  expect(screen.getByText(/world of star wars/i)).toBeInTheDocument();

  await user.click(screen.getByText(/people/i));
  expect(screen.getByText(/people of star wars/i)).toBeInTheDocument();
});

test("landing on a bad page", () => {
  const badRoute = "/some/bad/page";

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/not found/i)).toBeInTheDocument();
});
