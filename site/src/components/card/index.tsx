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
  const changeData = (key: string | number, value: string | number) => {
    const newData = item;
    item.data[key] = value;
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

  const valueInput = (type: string, value: string | number | Date) => {
    if (type === "data_nascimento") {
      return moment(value as Date).format("YYYY-MM-DD");
    } else if (type === "numero") {
      return +value;
    } else {
      return value;
    }
  };

  const icon = (type: string, data: number[]) => {
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
            onClick={() => changeData(data[0], (data[1] as number) + 1)}
          />
          <img
            src={arrowUp}
            alt="card-arrowUp"
            className="card-down"
            onClick={() => changeData(data[0], isNegative(data[1] as number))}
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

  return (
    <>
      {Object.entries(item.data).map((data) => {
        return (
          <>
            {data[0] !== "id" && (
              <div
                className={`card ${
                  item.legacy[data[0]] !== data[1] && "card-dif"
                }`}
              >
                <div className="card-content">
                  <div className="card-data">
                    <h1>{data[0]}</h1>
                    <div className="card-input">
                      <input
                        value={
                          valueInput(
                            data[0],
                            data[1] as string | number | Date
                          ) as string
                        }
                        onChange={(e) => changeData(data[0], e.target.value)}
                        type={typeInput(data[0] as string)}
                        min="0"
                      />
                      {icon(data[0] as string, data as number[])}
                    </div>
                  </div>
                  <div className="card-line" />
                  <div className="card-legacy">
                    <h1>{data[0]} - Legado</h1>
                    <h2>{item.legacy[data[0]]}</h2>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
}
