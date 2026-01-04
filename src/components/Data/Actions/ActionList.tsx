import { useEffect, useContext } from "react";
import { SkillsContext, SelectedIdContext } from "../../../containers/Contexts"
import Action from "./Action"
import "../../MainContent/Card/Card.css"

function ActionList({ actions }) {
// https://react.dev/learn/rendering-lists
const { skills, setSkills} = useContext(SkillsContext);
const { selectedSkillId, selectedGoalId, selectedActionId, setSelectedActionId } = useContext(SelectedIdContext);


    useEffect(() => {
        console.log("Selected with success, ACTION:", selectedActionId);
      }, [selectedActionId]);


      const handleEditAction = (nextAction) => {
        setSkills(skills.map(skill => 
            skill.id === selectedSkillId
                ? 
                    { 
                        ...skill,
                            goals: skill.goals.map(goal => // na : mag alles staan dat een waarde oplevert, dus ook een functie
                                goal.id === selectedGoalId
                                    ?   {
                                        ...goal, 
                                            actions: goal.actions.map(action => {
                                                if (action.id === nextAction.id) {
                                                    return nextAction;
                                                } else {
                                                    return action;
                                                }
                                            }
                                        )
                                    }
                                : goal
                            ) 
                        }
                    : skill
                )
            );
         }

      const handleDeleteAction = (idToDelete) => {
        setSkills(skills.map(skill =>  
            skill.id === selectedSkillId
                ? 
                    { 
                        ...skill,
                            goals: skill.goals.map(goal => // na : mag alles staan dat een waarde oplevert, dus ook een functie
                                goal.id === selectedGoalId
                                    ?   {
                                        ...goal, 
                                            actions: goal.actions.filter(action => action.id !== idToDelete)
                                    }
                                : goal
                            ) 
                        }
                    : skill
            )
        );
        setSelectedActionId(null); //niet vergeten de sluimerende geseletecteerde staat te resetten na het uitvoeren van deze functie
    };

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
                                        onClick={() => {
                                            setSelectedActionId(action.id)
                                        }}
                                        handleEdit={handleEditAction}
                                        handleDelete={handleDeleteAction}
                                    />
                                </li>
                            )
                    })}
            </ul>
    )
}

export default ActionList;