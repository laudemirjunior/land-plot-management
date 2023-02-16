import arrowLeft from "../../assets/arrowLeft.png";
import arrowRight from "../../assets/arrowRight.png";
import { PropsGetAllDataRequest } from "../../interfaces";
import "./styles.scss";

interface Props {
  minusPage: () => void;
  plusPage: () => void;
  dataItem: PropsGetAllDataRequest;
  totalItens: number;
  page: number;
}

export default function Header({
  minusPage,
  plusPage,
  dataItem,
  totalItens,
  page,
}: Props) {
  return (
    <div className="header">
      <div className="header-content">
        <span onClick={minusPage}>
          <img
            src={arrowLeft}
            alt="arrowLeft"
            className={`${page === 0 && "opacity"}`}
          />
        </span>
        <h1>{Object.keys(dataItem).length !== 0 ? dataItem.data.id : ""}</h1>
        <span onClick={plusPage}>
          <img
            src={arrowRight}
            alt="ArrowDown"
            className={`${page === totalItens && "opacity"}`}
          />
        </span>
      </div>
    </div>
  );
}
