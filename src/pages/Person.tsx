import { useParams } from "react-router-dom";

export const Person = () => {
  const { id } = useParams();

  return <div>Person Page {id}</div>;
};
