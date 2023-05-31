interface DetailsItemProps {
  type: string;
  value?: string;
}

export const DetailsItem: React.FC<DetailsItemProps> = ({ type, value }) => {
  return (
    <li
      className="flex 
    justify-between 
    text-[1.7rem] 
    text-ravn-light 
    font-bold 
    py-[1rem]
    border-b-3 
    border-black-opacity-15"
    >
      {type} <span className="text-ravn-dark capitalize">{value}</span>
    </li>
  );  
};
