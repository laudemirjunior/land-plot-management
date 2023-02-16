import { api } from ".";
import { PropsGetAllDataRequest } from "../interfaces";

const getAllDataRequest = async (): Promise<PropsGetAllDataRequest[]> => {
  const { data } = await api.get("/data");
  return data;
};

export { getAllDataRequest };
