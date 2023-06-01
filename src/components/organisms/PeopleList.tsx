import { PeopleData } from "../../models";
import { Button, Heading, Spinner } from "../atoms";
import { PersonCard } from "../molecules";

interface PeopleListProps {
  loading: boolean;
  listItems: PeopleData;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PeopleList: React.FC<PeopleListProps> = ({
  loading,
  listItems,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <>
      {listItems.results.length > 0 && (
        <div className="pl-[1.5rem]" data-testid="people-list">
          {listItems?.results.map((person, idx) => {
            return <PersonCard key={idx} person={person} idx={idx} />;
          })}
        </div>
      )}

      {loading && <Spinner />}

      {!loading && listItems.results.length === 0 && (
        <Heading title="No star wars characters." className="text-center py-4" />
      )}

      {!loading && listItems.results.length > 0 && (
        <div className="grid place-content-center py-8">
          <Button onClick={() => setCurrentPage(currentPage + 1)}>
            Load more characters
          </Button>
        </div>
      )}
    </>
  );
};
