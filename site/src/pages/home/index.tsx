import { useEffect, useState } from "react"
import Card from "../../components/card"
import Footer from "../../components/footer"
import Header from "../../components/header"
import { PropsGetAllDataRequest } from "../../interfaces"
import { getAllDataRequest } from "../../services/getAllDataRequest"
import { patchDataRequest } from "../../services/patchDataRequest"
import "./styles.scss"

export default function Home() {
  const [data, setData] = useState<PropsGetAllDataRequest[]>(
    [] as PropsGetAllDataRequest[]
  );
  const [dataItem, setDataItem] = useState<PropsGetAllDataRequest>(
    {} as PropsGetAllDataRequest
  );
  const [page, setPage] = useState(0);

  useEffect(() => {
    const getAllData = async () => {
      const dataRequest = await getAllDataRequest();
      setData(dataRequest);
      setDataItem(dataRequest[page]);
    };
    getAllData();
  }, [page]);

  const patchData = async () => {
    delete dataItem.data.id;
    await patchDataRequest(dataItem.legacy.id, dataItem.data);
  };

  const plusPage = () => {
    if (data.length > page + 1) {
      setDataItem(data[page + 1]);
      setPage(page + 1);
    }
  };

  const minusPage = () => {
    if (page > 0) {
      setDataItem(data[page - 1]);
      setPage(page - 1);
    }
  };

  return (
    <div className="home-container">
      <Header plusPage={plusPage} minusPage={minusPage} dataItem={dataItem} totalItens={data.length} page={page}/>
      {Object.keys(dataItem).length !== 0 && (
        <Card item={dataItem} setDataItem={setDataItem} />
      )}
      <Footer patchData={patchData} />
    </div>
  );
}
