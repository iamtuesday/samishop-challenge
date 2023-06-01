import { render, screen } from "@testing-library/react";
import { PeopleList } from "../components/organisms";
import { PeopleData, Planet } from "../models";
import { MemoryRouter } from "react-router-dom";

const mockListItems: PeopleData = {
  count: 0,
  next: "",
  previous: null,
  results: [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: null,
      homeworld: {
        name: "Tatooine",
      } as Planet,
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/",
      ],
      species: [],
      vehicles: [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/",
      ],
      starships: [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/",
      ],
      created: null,
      edited: null,
      url: "https://swapi.dev/api/people/1/",
    },
    {
      name: "R5-D4",
      height: "97",
      mass: "32",
      hair_color: "n/a",
      skin_color: "white, red",
      eye_color: "red",
      birth_year: "unknown",
      gender: null,
      homeworld: {
        name: "Tatooine",
      } as Planet,
      films: ["https://swapi.dev/api/films/1/"],
      species: ["https://swapi.dev/api/species/2/"],
      vehicles: [],
      starships: [],
      created: null,
      edited: null,
      url: "https://swapi.dev/api/people/8/",
    },
  ],
};


describe("PeopleList component", () => {
  beforeEach(() => {
    render(
      <PeopleList
        loading={false}
        listItems={mockListItems}
        currentPage={1}
        setCurrentPage={() => {}}
      />,
      { wrapper: MemoryRouter }
    );
  });

  test("should render the PeopleList component", () => {
    const peopleListElement = screen.getByTestId("people-list");
    expect(peopleListElement).toBeInTheDocument();

    const personCardElements = screen.getAllByRole("article");
    expect(personCardElements.length).toBe(mockListItems.results.length);
  });

  // test("calls setCurrentPage function when the 'Load more characters' button is clicked", async () => {
  //   const loadMoreButton = screen.getByRole("button", {
  //     name: "Load more characters",
  //   });
  //   fireEvent.click(loadMoreButton);

  //   const peopleListElement = await getPeople(2);

  //   expect(peopleListElement).toHaveBeenCalled();
  // });
});

test("renders the loading spinner when loading is true", () => {
  const mockListItems: PeopleData = {
    count: 0,
    next: "",
    previous: null,
    results: [],
  };
  render(
    <PeopleList
      loading={true}
      listItems={mockListItems}
      currentPage={1}
      setCurrentPage={() => {}}
    />,
    { wrapper: MemoryRouter }
  );

  const spinnerElement = screen.getByText(/loading/i);
  expect(spinnerElement).toBeInTheDocument();
});

test("renders the 'No star wars characters' heading when there are no results", () => {
  const mockListItems: PeopleData = {
    count: 0,
    next: "",
    previous: null,
    results: [],
  };
  render(
    <PeopleList
      loading={false}
      listItems={mockListItems}
      currentPage={1}
      setCurrentPage={() => {}}
    />
  );
  const headingElement = screen.getByText("No star wars characters.");
  expect(headingElement).toBeInTheDocument();
});
