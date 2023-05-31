import { useEffect, useState, useCallback } from "react";
import { Person } from "../models";
import { getPerson, getDetails } from "../services";

export const useGetPerson = (id: string) => {
  const [data, setData] = useState<Person>({} as Person);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);


  const fetchPerson = useCallback(async () => {
    try {
      setIsLoading(true);
      // Get person
      const { data: personData } = await getPerson(id);

      // Get all vehicles
      if (personData.vehicles.length > 0) {
        const vehiclePromises = personData.vehicles.map((vehicle) =>
          getDetails(vehicle as string)
        );
        const vehiclesData = await Promise.all(vehiclePromises);
        const vehicles = vehiclesData.map((vehicleData) => vehicleData.data);
        personData.vehicles = vehicles;
      }

      setData(personData);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchPerson();
  }, [id, fetchPerson]);

  return { data, error, isLoading };
};