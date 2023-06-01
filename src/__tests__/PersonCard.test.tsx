import { render, screen } from "@testing-library/react";
import { PersonCard } from "../components/molecules";
import { Planet } from "../models";
import { MemoryRouter } from "react-router-dom";


test("PersonCard renders correctly", async () => {
  const person = {
    name: "Luke Skywalker",
    species: [],
    homeworld: {
      name: "Tatooine",
    },
  };

  const homeworldName =
    typeof person.homeworld === "object" ? (person.homeworld as Planet) : "";

  const newPerson = { ...person, homeworld: homeworldName };
  const idx = 0;

  render(<PersonCard person={newPerson} idx={idx} />, {
    wrapper: MemoryRouter,
  });

  expect(screen.getByText(/luke skywalker/i)).toBeInTheDocument();
  expect(screen.getByText("Human from Tatooine")).toBeInTheDocument();

  const button = screen.getByRole("button");
  const iconNextElement = screen.getByTestId("icon-next");
  expect(button).toContainElement(iconNextElement);
});
