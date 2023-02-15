import { pool } from "../../connection";
import { deleteData } from "../../repositories";

const deleteDataService = async (id: number) => {
  const client = await pool.connect();
  const result = await client.query(deleteData(id));
  if (result.rowCount === 0) {
    throw new Error("Data not found");
  }
  client.release();
};

export { deleteDataService };
