import { useEffect } from "react";
import Goal from "./Goal";
import "../../MainContent/Card/Card.css"

function GoalList({ goals, selectedGoalId, setSelectedGoalId, handleEdit, handleDelete}) {
// https://react.dev/learn/rendering-lists

    useEffect(() => {
        console.log("Selected with success, GOAL:", selectedGoalId);
    }, [selectedGoalId]);

    return(
            <ul className="display-data-ul">
                {goals.map((goal) => {
                        return (
                                <li
                                    className="display-list-item"
                                    key={goal.id}
                                >
                                    <Goal
                                        goal={goal}
                                        onClick={() =>  setSelectedGoalId(goal.id)}
                                        handleEdit={handleEdit}
                                        handleDelete={handleDelete}
                                    />
                                </li>
                            )
                    })}
            </ul>
    )
}

export default GoalList;