import arrowLeft from "../../assets/arrowLeft.png";
import arrowRight from "../../assets/arrowRight.png";
import { PropsGetAllDataRequest } from "../../interfaces";
import "./styles.scss";

interface Props {
  minusPage: () => void;
  plusPage: () => void;
  dataItem: PropsGetAllDataRequest;
}

export default function Header({ minusPage, plusPage, dataItem }: Props) {
  return (
    <div className="header">
      <div className="header-content">
        <span onClick={minusPage}>
          <img src={arrowLeft} alt="arrowLeft" />
        </span>
        <h1>{Object.keys(dataItem).length !== 0 ? dataItem.data.id : ""}</h1>
        <span onClick={plusPage}>
          <img src={arrowRight} alt="ArrowDown" />
        </span>
      </div>
    </div>
  );
}
