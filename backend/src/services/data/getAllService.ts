import { pool } from "../../connection";
import { IDataModal } from "../../models";
import { getAllData, getAllLegacy } from "../../repositories";

interface ResultProps {
  data: IDataModal;
  legacy: IDataModal;
}

const getAllService = async () => {
  const client = await pool.connect();
  const resultData = await client.query(getAllData);
  const resultLegacy = await client.query(getAllLegacy);
  client.release();

  const result: ResultProps[] = [];

  resultData.rows.map((data) => {
    const legacyResult = resultLegacy.rows.find(
      (legacy) => legacy.id === data.id
    );
    if (legacyResult) {
      result.push({ data: data, legacy: legacyResult });
    }
  });

  return result;
};

export { getAllService };
