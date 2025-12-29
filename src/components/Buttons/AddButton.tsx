import "./Buttons.css"
import { TbCirclePlus } from "react-icons/tb";


function AddButton({ type, form }) {

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