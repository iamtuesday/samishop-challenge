import { PeopleData, Person } from "../models";
import { axiosInstance } from "../utilities";

export const getPeople = async (page: number) => {
  return await axiosInstance.get<PeopleData>(`/people/?page=${page}`);
};

export const getPerson = async (id: string) => {
  return await axiosInstance.get<Person>(`/people/${id}`);
};

export const getDetails = async (url: string) => {
  return await axiosInstance.get(url);
};
