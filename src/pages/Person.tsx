import { useParams } from "react-router-dom";
import { useGetPerson } from "../hooks";
import { PersonInformation } from "../components/organisms";
import { ErrorBoundary } from "../utilities";
import { FallBack } from "../components/atoms";

export const Person = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetPerson(id as string);

  console.log(data);
  return (
    <>
      <ErrorBoundary
        fallBackComponent={<FallBack />}
        resetCondition={data}
        error={error}
      >
        <PersonInformation person={data} isLoading={isLoading} />
      </ErrorBoundary>
    </>
  );
};
