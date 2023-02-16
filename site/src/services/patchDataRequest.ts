import { api } from ".";
import { PropsData } from "../interfaces";

const patchDataRequest = async (id: string, item: PropsData) => {
  await api.patch(`/data/${id}`, item);
  alert("Dados atualizados com sucesso!");
};

export { patchDataRequest };
