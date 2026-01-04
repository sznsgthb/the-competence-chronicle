import { TbX } from "react-icons/tb";
import "./Buttons.css"
import type { CloseButtonProps } from "../../../types.ts"

function CloseButton({ onClose } : CloseButtonProps ) {

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