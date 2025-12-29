import { TbDeviceFloppy } from "react-icons/tb";
import "./Buttons.css"

function SaveButton({ onClick }) {

    return(
        <button 
            type="button"
            className="form-button"
            onClick={onClick}
        >
            {<TbDeviceFloppy className="button-icon" />}
        </button>
    )
}

export default SaveButton;