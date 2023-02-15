import pool from "../../connection";
import { getAll } from "../../repositories/data";

const getAllService = async () => {
  const client = await pool.connect();
  const result = await client.query(getAll);
  client.release();
  return result.rows;
};

export { getAllService };
