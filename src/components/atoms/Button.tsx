import { cn } from "../../utilities";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-white bg-black rounded-full text-[1.5rem]",
        "font-medium px-10 py-2 transition-all",
        "duration-300 ease-in-out hover:opacity-80",
        className
      )}
    >
      {children}
    </button>
  );
};
