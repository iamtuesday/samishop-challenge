import { People, Result } from "@/models";
import { getPeople } from "@/services";
import { useEffect, useState } from "react";

export const useGetPeople = () => {
  const [data, setData] = useState<People>({} as People);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        setLoading(true);
        const { data } = await getPeople();
        console.log(data)
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
