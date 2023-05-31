import { Person, Vehicle } from "../../models";
import { Heading, Spinner } from "../atoms";
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

  return (
    <>
      {isLoading && <Spinner />}

      {!isLoading && !person && (
        <Heading title="The character has no details." />
      )}
      
      {!isLoading && person && (
        <section className="PersonInformation">
          <PersonGeneral
            eye_color={eye_color}
            hair_color={hair_color}
            skin_color={skin_color}
            birth_year={birth_year}
          />

          <PersonVehicles vehicles={vehicles as Vehicle[]} />
        </section>
      )}
    </>
  );
};
