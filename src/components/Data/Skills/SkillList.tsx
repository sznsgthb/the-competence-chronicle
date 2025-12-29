import { useEffect } from "react";
import Skill from "./Skill";
import "../../MainContent/Card/Card.css"

function SkillList({ skills, selectedSkillId, setSelectedSkillId, handleEdit, handleDelete }) {
// https://react.dev/learn/rendering-lists

    useEffect(() => {
        console.log("Selected with success, SKILL:", selectedSkillId);
    }, [selectedSkillId]);

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
                                            onClick={() => setSelectedSkillId(skill.id) }
                                            handleEdit={handleEdit}
                                            handleDelete={handleDelete}
                                        />
                                </li>
                            )
                    })}
            </ul>
    )
}

export default SkillList;