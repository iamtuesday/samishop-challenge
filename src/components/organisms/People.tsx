"use client";

import { useGetPeople } from "@/hooks/useGetPeople";
import { ErrorBoundary } from "@/utilities";

export const People = () => {
  const { error, data, loading } = useGetPeople();
  return (
    <section>
      {loading && <p>Loading...</p>}

      <ErrorBoundary
        fallBackComponent={<p>Failed to Load Data</p>}
        resetCondition={data}
        error={error}
      >
        {/* <ul>
          {data.results.map((person, idx) => {
            return (
              <li key={idx}>
                {person.name}
                <span>{person.species}</span>
              </li>
            );
          })}
        </ul> */}
        {JSON.stringify(data)}
      </ErrorBoundary>
    </section>
  );
};
