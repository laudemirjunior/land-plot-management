import { pool } from "../../connection";
import { getData, getLegacy } from "../../repositories";

const getDataService = async (id: number) => {
  const client = await pool.connect();
  const resultData = await client.query(getData(+id));
  const resultLegacy = await client.query(getLegacy(+id));
  client.release();
  return { data: resultData.rows[0], legacy: resultLegacy.rows[0] };
};

export { getDataService };
