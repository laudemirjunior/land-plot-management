import { pool } from "../../connection";
import { getData, patchData } from "../../repositories";
import { ErrorHandler } from "../../utils/error.util";

const patchDataService = async (id: string, data: any) => {
  const client = await pool.connect();
  const findData = await client.query(getData(+id));
  if (findData.rowCount === 0) {
    throw new ErrorHandler(400, "Data not found");
  }
  Object.keys(data).map(async (key) => {
    const datas = await client.query(patchData(key, data, id));
  });
  client.release();
};

export { patchDataService };
