import { useNavigate } from "react-router-dom";
import { Person, Planet } from "../../models";
import { cn } from "../../utilities";
import useCharacterStore from "../../store";

interface PersonCardProps {
  person: Person;
  idx: number;
}

export const PersonCard: React.FC<PersonCardProps> = ({ person, idx }) => {
  const { name, species, homeworld } = person;

  const navigate = useNavigate();
  const { position, setPosition, setName } = useCharacterStore();

  const currentIdx = idx + 1;
  const handleNext = () => {
    navigate(`/people/${currentIdx}`);
    setPosition(currentIdx);
    setName(name);
  };

  //Validate species is an array
  const Droid = species.length > 0 ? "Droid" : "Human";

  //Validate homeworld is an object
  const homeworldName =
    typeof homeworld === "object" ? (homeworld as Planet).name : "";

  return (
    <article
      className={cn("PersonCard", currentIdx === position && "active")}
      onClick={handleNext}
    >
      <div className="PersonCard__content">
        <h2 className="PersonCard__h2"> {name}</h2>
        <p className="PersonCard__p">
          {Droid} from {homeworldName}
        </p>
      </div>
      <button className="PersonCard__btn">
        <span className="icon-next"></span>
      </button>
    </article>
  );
};
