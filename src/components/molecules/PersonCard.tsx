import { useNavigate } from "react-router-dom";
import { Person } from "../../models";

interface PersonCardProps {
  person: Person;
  idx: number;
}

export const PersonCard: React.FC<PersonCardProps> = ({ person, idx }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate(`/people/${idx + 1}`)
    console.log("Cerrar");
  }

  const Droid = person.species.length > 0  ? "Droid" : "Human";

  return (
    <article className="PersonCard">
      <div className="PersonCard__content">
        <h2 className="PersonCard__h2"> {person.name}</h2>
        <p className="PersonCard__p">{Droid} from Idk</p>
      </div>
      <button className="PersonCard__btn" onClick={handleNext}>
        <span className="icon-next"></span>
      </button>
    </article>
  );
};
