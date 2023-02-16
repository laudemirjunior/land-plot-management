import { api } from ".";
import { PropsData } from "./getAllDataRequest";

const patchDataRequest = async (id: string, item: PropsData) => {
  await api.patch(`/data/${id}`, item);
};

export { patchDataRequest };
