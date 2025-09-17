import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icons from "../../Helpers/icons";

Icons();

export default function Btn({ onBackClick, onHomeClick }) {
    return (
        <div className="leftCol">
            {onHomeClick && (
                <button onClick={onHomeClick} className="homeBtn">
                    <FontAwesomeIcon icon= "house" />
                </button>
            )}

            {onBackClick && (
                <button onClick={onBackClick} className="backBtn">
                    <FontAwesomeIcon icon= "left-long" />
                </button>
            )}
        </div>
    );
}
