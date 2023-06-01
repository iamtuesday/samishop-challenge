import { render, screen } from "@testing-library/react";
import { PersonVehicles } from "../components/molecules";
import { Vehicle } from "../models";

test("PersonVehicles renders correctly", () => {
  const mockVehicles: Vehicle[] = [
    { name: "Vehicle 1" },
    { name: "Vehicle 2" },
    { name: "Vehicle 3" },
  ];

  render(<PersonVehicles vehicles={mockVehicles} />);

  expect(screen.getByText(/vehicles/i)).toBeInTheDocument();

  mockVehicles.forEach((vehicle) => {
    expect(screen.getByText(vehicle.name)).toBeInTheDocument();
  });
});


test("PersonVehicles renders correctly with no vehicles", () => {
  const mockVehicles: Vehicle[] = [];

  render(<PersonVehicles vehicles={mockVehicles} />);

  expect(screen.getByText(/the character has no vehicles/i)).toBeInTheDocument();
})