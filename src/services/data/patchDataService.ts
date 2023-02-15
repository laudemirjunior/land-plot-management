import pool from "../../connection";
import { patchData } from "../../repositories";

const patchDataService = async (id: string, data: any) => {
  const client = await pool.connect();
  Object.keys(data).forEach(async (key) => {
    return await client.query(patchData(key, data, id));
  });
  client.release();
};

export { patchDataService };
