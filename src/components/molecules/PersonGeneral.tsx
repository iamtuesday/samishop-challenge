import { DetailsItem, Heading } from "../atoms";

interface PersonGeneralProps {
  eye_color: string;
  hair_color: string;
  skin_color: string;
  birth_year: string;
}

export const PersonGeneral: React.FC<PersonGeneralProps> = ({
  eye_color,
  hair_color,
  skin_color,
  birth_year,
}) => {
  return (
    <>
      <Heading title="General Information" />
      <ul className="PersonInformation__ul">
        <DetailsItem type="Eye Color:" value={eye_color} />
        <DetailsItem type="Hair Color:" value={hair_color} />
        <DetailsItem type="Skin Color" value={skin_color} />
        <DetailsItem type="Birth Year" value={birth_year} />
      </ul>
    </>
  );
};
