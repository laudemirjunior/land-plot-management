const getAllLegacy = () => {
  return {
    text: "SELECT * FROM legado.dados ORDER BY id ASC",
  };
};

const getLegacy = (id: number) => {
  return {
    text: "SELECT * FROM legado.dados WHERE id = $1 ORDER BY id ASC",
    values: [id],
  };
};

export { getAllLegacy, getLegacy };
