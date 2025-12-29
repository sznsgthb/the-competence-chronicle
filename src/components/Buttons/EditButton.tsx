import { TbEdit } from "react-icons/tb";
import "./Buttons.css"

function EditButton({ onClick }) {

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