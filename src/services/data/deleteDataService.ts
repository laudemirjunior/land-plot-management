import pool from "../../connection";
import { deleteData } from "../../repositories";

const deleteDataService = async (id: number) => {
  const client = await pool.connect();
  await client.query(deleteData(id));
  client.release();
};

export { deleteDataService };
