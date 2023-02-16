import moment from "moment";
import arrowUp from "../../assets/arrowUp.png";
import close from "../../assets/close.png";
import { PropsGetAllDataRequest } from "../../services/getAllDataRequest";
import "./styles.scss";

interface Props {
  item: PropsGetAllDataRequest | any;
  setDataItem: (data: PropsGetAllDataRequest) => void;
}

export default function Card({ item, setDataItem }: Props) {
  function replaceCPF(cpf: string) {
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  const changeData = (key: string, value: string) => {
    const newData = item;
    if (key === "cpf_cnpj") {
      if (String(value).length < 15) {
        item.data[key] = replaceCPF(value);
      }
    } else {
      item.data[key] = value;
    }
    setDataItem({ ...newData });
  };

  const isNegative = (value: number) => {
    if (value >= 1) {
      return value - 1;
    }
    return value;
  };

  const typeInput = (type: string) => {
    if (type === "data_nascimento") {
      return "date";
    } else if (type === "numero") {
      return "number";
    } else {
      return "test";
    }
  };

  const valueInput = (type: string, value: string) => {
    if (type === "data_nascimento") {
      return moment(value).format("YYYY-MM-DD");
    } else if (type === "numero") {
      return +value;
    } else {
      return value;
    }
  };

  const formatText = (type: string, value: string) => {
    if (type === "data_nascimento") {
      return moment(value).format("DD/MM/YYYY");
    } else {
      return value;
    }
  };

  const icon = (type: string, data: string[]) => {
    const isType = typeInput(type);
    if (isType === "date") {
      return null;
    } else if (isType === "number") {
      return (
        <div className="card-arrows">
          <img
            src={arrowUp}
            alt="arrowUp"
            className="card-up"
            onClick={() => changeData(data[0], data[1] + 1)}
          />
          <img
            src={arrowUp}
            alt="card-arrowUp"
            className="card-down"
            onClick={() => changeData(data[0], String(isNegative(+data[1])))}
          />
        </div>
      );
    } else {
      return (
        <span onClick={() => changeData(data[0], "")}>
          <img src={close} alt="close" />
        </span>
      );
    }
  };

  const formatDate = (type: string, value: string) => {
    if (type === "data_nascimento") {
      return moment(value).format("YYYY-MM-DD");
    } else {
      return value;
    }
  };

  return (
    <>
      {Object.entries(item.data).map((data, index) => {
        return (
          <div key={index}>
            {data[0] !== "id" && (
              <div
                className={`card ${
                  formatDate(data[0], item.legacy[data[0]]) !== data[1] &&
                  "card-dif"
                }`}
              >
                <div className="card-content">
                  <div className="card-data">
                    <h1>{data[0]}</h1>
                    <div className="card-input">
                      <input
                        value={valueInput(data[0], String(data[1]))}
                        onChange={(e) => changeData(data[0], e.target.value)}
                        type={typeInput(data[0])}
                        min="0"
                      />
                      {icon(data[0], data as string[])}
                    </div>
                  </div>
                  <div className="card-line" />
                  <div className="card-legacy">
                    <h1>{data[0]} - Legado</h1>
                    <h2>{formatText(data[0], item.legacy[data[0]])}</h2>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
