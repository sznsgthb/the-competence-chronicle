import { TbX } from "react-icons/tb";
import "./Buttons.css"

function CloseButton({ onClose }) {

    return(
        <button 
            type="button"
            className="close-button"
            onClick={onClose}
        >
            {<TbX />}
        </button>
    )
}

export default CloseButton;