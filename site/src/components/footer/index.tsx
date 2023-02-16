import arrowDown from "../../assets/arrowDown.png";
import "./styles.scss";

export default function Footer({ patchData }: any) {
  return (
    <div className="footer">
      <button onClick={patchData}>
        <span className="footer-button">
          <img src={arrowDown} alt="arrowDown" />
          Salvar
        </span>
      </button>
    </div>
  );
}
