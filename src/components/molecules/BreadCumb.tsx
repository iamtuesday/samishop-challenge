import { useNavigate } from "react-router-dom";
import { cn } from "../../utilities/clsx-tw-merge";
import useCharacterStore from "../../store";

interface BreadCumbProps {
  label: string;
  show: boolean;
  isDesktop: boolean;
}

export const BreadCumb: React.FC<BreadCumbProps> = ({
  label,
  show,
  isDesktop,
}) => {
  const navigate = useNavigate();
  const { setPosition } = useCharacterStore();
  
  const handleBack = () => {
    navigate("/people");
    setPosition(0);
  };

  return (
    <div className={cn("BreadCumb", isDesktop ? "text-left" : "text-center")}>
      {show && !isDesktop && (
        <button className="BreadCumb__btn" onClick={handleBack}>
          <span className="icon-arrow"></span>
        </button>
      )}

      <h2>{show && !isDesktop ? label : " People of Star Wars"}</h2>
    </div>
  );
};
