import { TbDeviceFloppy } from "react-icons/tb";
import "./Buttons.css";
import type { SaveButtonProps } from "../../../types.ts";

function SaveButton({ onClick } : SaveButtonProps) {

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