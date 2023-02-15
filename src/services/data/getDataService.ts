import pool from "../../connection";
import { getData } from "../../repositories";

const getDataService = async (id: number) => {
  const client = await pool.connect();
  const result = await client.query(getData(+id));
  client.release();
  return { ...result.rows };
};

export { getDataService };
