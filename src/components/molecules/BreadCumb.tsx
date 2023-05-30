import {  useNavigate } from "react-router-dom";
import { cn } from "../../utilities/clsx-tw-merge";

interface BreadCumbProps {
  label: string;
  show: boolean;
  isDesktop: boolean;
}

export const BreadCumb: React.FC<BreadCumbProps> = ({ label, show, isDesktop }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/people");
  };

  return (
    <div className={cn("BreadCumb", isDesktop ? "text-left" : "text-center")}>
      {show && !isDesktop && (
        <button className="BreadCumb__btn" onClick={handleBack}>
          <span className="icon-arrow"></span>
        </button>
      )}

      <h2>{show ? label : " People of Star Wars"}</h2>
    </div>
  );
};
