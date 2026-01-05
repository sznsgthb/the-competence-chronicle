import { TbEdit } from "react-icons/tb";
import "./Buttons.css"
import type { EditButtonProps } from "../../../types";

function EditButton({ onClick } :  EditButtonProps ) {

    return(
        <button 
            type="button"
            className="form-button"
            onClick={onClick}
        >
            {<TbEdit className="button-icon" />}
        </button>
    )
}

export default EditButton;