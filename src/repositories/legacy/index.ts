const getAllLegacy = "SELECT * FROM legado.dados";

const getLegacy = (id: number) => {
  return {
    text: "SELECT * FROM dados.legado WHERE id = $1",
    values: [id],
  };
};

export { getAllLegacy, getLegacy };
