import { Vehicle } from "../../models";
import { DetailsItem, Heading } from "../atoms";

interface PersonVehiclesProps {
  vehicles: Vehicle[];
}

export const PersonVehicles: React.FC<PersonVehiclesProps> = ({ vehicles }) => {
  return (
    <>
      <Heading title="Vehicles" />
      <ul>
        {vehicles?.length > 0 ? (
          vehicles.map((vehicle, index) => (
            <DetailsItem key={index} type={vehicle.name} />
          ))
        ) : (
          <li className="text-ravn-light font-normal text-[1.7rem]">
            The character has no vehicles.
          </li>
        )}
      </ul>
    </>
  );
};
