import { TbTrash } from "react-icons/tb";
import "./Buttons.css";
import type { DeleteButtonProps } from "../../../types";


function DeleteButton({ onClick } : DeleteButtonProps ) {


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