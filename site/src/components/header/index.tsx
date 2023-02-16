import arrowLeft from "../../assets/arrowLeft.png";
import arrowRight from "../../assets/arrowRight.png";
import "./styles.scss";

export default function Header({ minusPage, plusPage, dataItem }: any) {
  return (
    <div className="header">
      <div className="header-content">
        <span onClick={minusPage}>
          <img src={arrowLeft} alt="arrowLeft" />
        </span>
        <h1>{dataItem.data.id}</h1>
        <span onClick={plusPage}>
          <img src={arrowRight} alt="ArrowDown" />
        </span>
      </div>
    </div>
  );
}
