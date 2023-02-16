import { api } from "."
import { PropsData } from "../interfaces"

const patchDataRequest = async (id: string, item: PropsData) => {
  try {
  await api.patch(`/data/${id}`, item);
  alert("Dados atualizados com sucesso!");
  } catch (error) {
  alert("Erro ao atualizar dados!");
  }
};

export { patchDataRequest }

