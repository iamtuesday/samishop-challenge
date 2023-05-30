import { People } from "@/models";
import { axiosInstance } from "@/utilities";

export const getPeople = async () => {
  return await axiosInstance.get<People>("/people/?page=1");
};
