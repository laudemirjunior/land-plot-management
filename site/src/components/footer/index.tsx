import arrowDown from "../../assets/arrowDown.png";
import "./styles.scss";

interface Props {
  patchData: () => void;
}

export default function Footer({ patchData }: Props) {
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
