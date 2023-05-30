
import { useEffect, useState } from "react";
import { PeopleData } from "../models";
import { getPeople } from "../services";

export const useGetPeople = () => {
  const [data, setData] = useState<PeopleData>({} as PeopleData);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        setLoading(true);
        const { data } = await getPeople();
        setData(data);

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
