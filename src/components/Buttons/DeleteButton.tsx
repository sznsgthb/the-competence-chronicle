import { TbTrash } from "react-icons/tb";
import "./Buttons.css"


function DeleteButton({ onClick }) {


    return(
        <button 
            type="button"
            className="form-button"
            onClick={onClick}
        >
           {<TbTrash className="button-icon" />}
        </button>
    )
}

export default DeleteButton;