import AddButton from "../Buttons/AddButton";
import "../MainContent/Card/Card.css";
import type { TextfieldProps} from "../../../types";


function Textfield({ input, formId, error, handleChange, handleSubmit } : TextfieldProps ) {


    return (
        <>
            <div className="input-field-div" >
                <span>
                    <form 
                        id={formId}
                        onSubmit={handleSubmit}>
                            <label>
                                <input
                                    className="text-input"
                                    type="text"
                                    onChange={handleChange} // dit is dus de event.target.value
                                    value={input}
                                />
                            </label>
                    </form>
                </span>
                <span className="button-div">
                    <AddButton type="submit" form={formId} />
                </span>
            </div>
            {error && <p className="error-message">{error}</p>}
            </>
    )
}

export default Textfield;