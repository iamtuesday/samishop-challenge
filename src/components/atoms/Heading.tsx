import { cn } from "../../utilities";

interface HeadingProps {
  title: string;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, className }) => {
  return (
    <h2 className={cn("text-[1.7rem] font-bold text-ravn-dark", className)}>
      {title}
    </h2>
  );
};

