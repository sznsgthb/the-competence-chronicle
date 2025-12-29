import { useState } from 'react';
import EditButton from "../../Buttons/EditButton";
import SaveButton from "../../Buttons/SaveButton";
import DeleteButton from "../../Buttons/DeleteButton";
import "../../Buttons/Buttons.css";
import "../../MainContent/Card/Card.css";



function Action({ action, onClick, handleEdit, handleDelete }) {
    const [isEditing, setIsEditing] = useState(false);


    return (
        <>
            <span className="listitem" onClick={!isEditing ? onClick : undefined}>
                {isEditing ? (
                <input
                    className="update-inline-input"
                    value={action.name}
                    onChange={event => {
                    handleEdit({ ...action, name: event.target.value });
                    }}
                />
                ) : (
                action.name
                )}
            </span>

                {isEditing ? (
                    <span className="button-div">
                        <SaveButton onClick={() => setIsEditing(false)} />
                        <DeleteButton onClick={() => handleDelete(action.id)} />
                    </span>

                ) : (
                <span className="button-div">
                    <EditButton onClick={() => setIsEditing(true)} />
                    <DeleteButton onClick={() => handleDelete(action.id)} />
                </span>
                )}
        </>
    );
}

export default Action;