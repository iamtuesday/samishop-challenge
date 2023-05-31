import { useEffect, useState } from "react";
import { PeopleData } from "../models";
import { getDetails, getPeople } from "../services";

export const useGetPeople = () => {
  const [data, setData] = useState<PeopleData>({} as PeopleData);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        setLoading(true);
        // Get people
        const { data: peopleData } = await getPeople();

        // Get home world
        const peopleWithHomeworlds = await Promise.all(
          peopleData.results.map(async (person) => {
            const { data: homeworld } = await getDetails(
              person.homeworld as string
            );
            return { ...person, homeworld };
          })
        );

        setData({ ...peopleData, results: peopleWithHomeworlds });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, []);

  return { data, error, loading };
};
