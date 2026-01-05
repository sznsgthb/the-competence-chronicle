import "./Buttons.css"
import { TbCirclePlus } from "react-icons/tb";
import type { AddButtonProps } from "../../../types";


function AddButton({ type, form } : AddButtonProps) {

    return(
        <button
            type={type}
            form={form}
            className="form-button"
        >
            {<TbCirclePlus className="button-icon" />}
        </button>
    )
}

export default AddButton;