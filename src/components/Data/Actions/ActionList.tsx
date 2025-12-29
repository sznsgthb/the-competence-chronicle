import { useEffect } from "react";
import Action from "./Action"
import "../../MainContent/Card/Card.css"

function ActionList({ actions, selectedActionId, setSelectedActionId, handleEdit, handleDelete}) {
// https://react.dev/learn/rendering-lists

    useEffect(() => {
        console.log("Selected with success, ACTION:", selectedActionId);
      }, [selectedActionId]);

    return(
            <ul className="display-data-ul">
                {actions.map((action) => {
                        return (
                                <li
                                    className="display-list-item"
                                    key={action.id}
                                >
                                    <Action
                                            action={action}
                                            onClick={() => setSelectedActionId(action.id)}
                                            handleEdit={handleEdit}
                                            handleDelete={handleDelete}
                                    />
                                </li>
                            )
                    })}
            </ul>
    )
}

export default ActionList;