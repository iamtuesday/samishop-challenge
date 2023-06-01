import { useEffect, useState } from "react";
import { PeopleData } from "../models";
import { getDetails, getPeople } from "../services";

export const useGetPeople = () => {
  const [data, setData] = useState<PeopleData>({
    count: 0,
    next: "",
    previous: "",
    results: [],
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        setLoading(true);
        // Get people
        const { data: peopleData } = await getPeople(currentPage);

        // Get home world
        const peopleWithHomeworlds = await Promise.all(
          peopleData.results.map(async (person) => {
            const { data: homeworld } = await getDetails(
              person.homeworld as string
            );
            return { ...person, homeworld };
          })
        );

        // Set data
        setData((prevData) => ({
          ...prevData,
          results: [...prevData.results, ...peopleWithHomeworlds],
        }));

      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, [currentPage]);

  return { data, error, loading, currentPage, setCurrentPage };
};
