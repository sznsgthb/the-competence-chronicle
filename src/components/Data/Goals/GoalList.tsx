import { useEffect, useContext } from "react";
import { SkillsContext, SelectedIdContext } from "../../../containers/Contexts"
import Goal from "./Goal";
import "../../MainContent/Card/Card.css"
import type { GoalType, GoalListProps } from "../../../../types";

function GoalList({ goals} : GoalListProps ) {
// https://react.dev/learn/rendering-lists
const { skills, setSkills} = useContext(SkillsContext);
const { selectedSkillId, selectedGoalId, setSelectedGoalId, setSelectedActionId } = useContext(SelectedIdContext);

    useEffect(() => {
        console.log("Selected with success, GOAL:", selectedGoalId);
    }, [selectedGoalId]);


    const handleEditGoal = (nextGoal: GoalType) => {
        setSkills(skills.map(skill => 
            skill.id === selectedSkillId
            ?
                { 
                ...skill,
                goals:  skill.goals.map(goal => {
                    if (goal.id === nextGoal.id) {
                        return nextGoal;
                    } else {
                        return goal;
                    }
                })
            }
            : skill
        ));
    }


// https://react.dev/learn/updating-arrays-in-state
    const handleDeleteGoal = (idToDelete: number) => {
        setSkills(skills.map(skill =>  
            skill.id === selectedSkillId  
            ? 
            { 
                ...skill,
                goals:  skill.goals.filter(goal => goal.id !== idToDelete)
            }
                : skill
            )
        );
        setSelectedGoalId(null);  //niet vergeten de sluimerende geseletecteerde staat te resetten na het uitvoeren van deze functie
        setSelectedActionId(null);
    };

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
                                        onClick={() =>  {
                                            setSelectedGoalId(goal.id)
                                        }}
                                        handleEdit={handleEditGoal}
                                        handleDelete={handleDeleteGoal}
                                    />
                                </li>
                            )
                    })}
            </ul>
    )
}

export default GoalList;