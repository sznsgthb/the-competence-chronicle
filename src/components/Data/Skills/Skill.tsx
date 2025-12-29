import { useState } from 'react';
import EditButton from "../../Buttons/EditButton";
import SaveButton from "../../Buttons/SaveButton";
import DeleteButton from "../../Buttons/DeleteButton";
import "../../Buttons/Buttons.css";
import "../../MainContent/Card/Card.css";

//https://react.dev/learn/updating-arrays-in-state#updating-arrays-without-mutation
function Skill({ skill, onClick, handleEdit, handleDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    // let skillContent;

    // if (isEditing) {
    //     skillContent = (
    //         <>
    //             <div>
    //                 <input
    //                     value={skill.name}
    //                     onChange={event => {
    //                         handleEdit({
    //                         ...skill,
    //                         name: event.target.value
    //                         });
    //                     }}
    //                 />
    //             </div>
    //             <SaveButton onClick={() => setIsEditing(false)} />
    //         </>
    //     )
    // } else {
    //     skillContent = (
    //         <>
    //             <span
    //                 onClick={onClick}
    //             >
    //                 {skill.name}
    //             </span>
    //             <EditButton onClick={() => {
    //                 handleEdit(skill.id);
    //                 setIsEditing(true);
    //             }}/> 
    //         </>
    //     )
    // }

        // return (
    //     <span>
    //         {skillContent}
    //          <DeleteButton onClick={() => handleDelete(skill.id)} /> {/*deze button op verschillende plekken met uniek id moet worden aangesproken, id dus hier het argument*/}
    //     </span>
    // )



    return (
        <>
            <span className="listitem" onClick={!isEditing ? onClick : undefined}>
                {isEditing ? (
                <input
                    className="update-inline-input"
                    value={skill.name}
                    onChange={event => {
                    handleEdit({ ...skill, name: event.target.value });
                    }}
                />
                ) : (
                skill.name
                )}
            </span>

                {isEditing ? (
                    <span className="button-div">
                        <SaveButton onClick={() => setIsEditing(false)} />
                        <DeleteButton onClick={() => handleDelete(skill.id)} />
                    </span>

                ) : (
                <span className="button-div">
                    <EditButton onClick={() => setIsEditing(true)} />
                    <DeleteButton onClick={() => handleDelete(skill.id)} />
                </span>
                )}
        </>
    );

}

export default Skill;