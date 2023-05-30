import { PeopleData } from "../models";
import { axiosInstance } from "../utilities";

export const getPeople = async () => {
  return await axiosInstance.get<PeopleData>("/people/?page=1");
};
