import { useState, useContext } from 'react';
import { SelectedIdContext } from "../../../containers/Contexts"
import EditButton from "../../Buttons/EditButton";
import SaveButton from "../../Buttons/SaveButton";
import DeleteButton from "../../Buttons/DeleteButton";
import "../../Buttons/Buttons.css";
import "../../MainContent/Card/Card.css";



function Goal({ goal, onClick, handleEdit, handleDelete }) {
    const { selectedGoalId } = useContext(SelectedIdContext);
    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
            <span className={selectedGoalId === goal.id ? "listitem active-listitem" : "listitem"} onClick={!isEditing ? onClick : undefined}>
                {isEditing ? (
                <input
                    className="update-inline-input"
                    value={goal.name}
                    onChange={event => {
                    handleEdit({ ...goal, name: event.target.value });
                    }}
                />
                ) : (
                goal.name
                )}
            </span>

                {isEditing ? (
                    <span className="button-div">
                        <SaveButton onClick={() => setIsEditing(false)} />
                        <DeleteButton onClick={() => handleDelete(goal.id)} />
                    </span>

                ) : (
                <span className="button-div">
                    <EditButton onClick={() => setIsEditing(true)} />
                    <DeleteButton onClick={() => handleDelete(goal.id)} />
                </span>
                )}
        </>
    );

}

export default Goal;