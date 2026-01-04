import { useEffect, useContext } from "react";
import { SkillsContext, SelectedIdContext } from "../../../containers/Contexts"
import Skill from "./Skill";
import "../../MainContent/Card/Card.css"

function SkillList() {
// https://react.dev/learn/rendering-lists
    const { skills, setSkills} = useContext(SkillsContext);
    const { selectedSkillId, setSelectedSkillId, setSelectedGoalId, setSelectedActionId } = useContext(SelectedIdContext);

    useEffect(() => {
        console.log("Selected with success, SKILL:", selectedSkillId);
    }, [selectedSkillId]);


    const handleEditSkill = (nextSkill) => {
        setSkills(skills.map(skill => {
            if (skill.id === nextSkill.id) {
                return nextSkill;
            } else {
                return skill;
            }
        }));
    }

// https://react.dev/learn/updating-arrays-in-state
    const handleDeleteSkill = (idToDelete) => {
        setSkills(skills.filter(skill => skill.id !== idToDelete)
        );
        setSelectedSkillId(null); //niet vergeten de sluimerende geseletecteerde staat te resetten na het uitvoeren van deze functie
        setSelectedGoalId(null);
        setSelectedActionId(null);
      };


    // const markSkillAsActive = (id) => {
    //     setActive(id);
    // }


    return(
            <ul className="display-data-ul">
                {skills.map((skill) => {
                        return (
                                <li
                                    className="display-list-item"
                                    key={skill.id}
                                    >
                                        <Skill
                                            skill={skill}
                                            onClick={() => {
                                                setSelectedSkillId(skill.id);
                                                // markSkillAsActive(skill.id);
                                            }}
                                            handleEdit={handleEditSkill}
                                            handleDelete={handleDeleteSkill}
                                        />
                                </li>
                            )
                    })}
            </ul>
    )
}

export default SkillList;