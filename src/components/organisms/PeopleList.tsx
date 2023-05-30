import { PeopleData } from "../../models";
import { Spinner } from "../atoms";
import { PersonCard } from "../molecules";

interface PeopleListProps {
  loading: boolean;
  listItems: PeopleData;
}

export const PeopleList: React.FC<PeopleListProps> = ({
  loading,
  listItems,
}) => {
  return (
    <section className="pl-[1.5rem]">
      {loading && <Spinner />}
      <div>
        {listItems.results?.length > 0 &&
          listItems.results.map((person, idx) => {
            return <PersonCard key={idx} person={person} idx={idx}/>;
          })}
      </div>
    </section>
  );
};
