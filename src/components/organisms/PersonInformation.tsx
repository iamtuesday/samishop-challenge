import { Person, Vehicle } from "../../models";
import { Spinner } from "../atoms";
import { PersonGeneral, PersonVehicles } from "../molecules";

interface PersonInformationProps {
  person: Person;
  isLoading: boolean;
}

export const PersonInformation: React.FC<PersonInformationProps> = ({
  person,
  isLoading,
}) => {
  const { vehicles, eye_color, hair_color, skin_color, birth_year } = person;

  if (isLoading) return <Spinner />;

  return (
    <section className="PersonInformation">
      <PersonGeneral
        eye_color={eye_color}
        hair_color={hair_color}
        skin_color={skin_color}
        birth_year={birth_year}
      />

      <PersonVehicles vehicles={vehicles as Vehicle[]} />
    </section>
  );
};
