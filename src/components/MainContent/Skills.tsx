import { useState, useEffect } from "react";
import Card from "./Card/Card";
import Textfield from "../Forms/Textfield"
import SkillList from "../Data/Skills/SkillList"
import GoalList from "../Data/Goals/GoalList"
import ActionList from "../Data/Actions/ActionList"
import "./MainContent.css";

function Skills({ skills, setSkills, setShow }) {


    const [skillInput, setSkillInput] = useState("");
    const [skillError, setSkillError] = useState("");
    const [selectedSkillId, setSelectedSkillId] = useState(null);

    const [goalInput, setGoalInput] = useState("");
    const [goalError, setGoalError] = useState("");
    const [selectedGoalId, setSelectedGoalId] = useState(null);

    const [actionInput, setActionInput] = useState("");
    const [actionError, setActionError] = useState("");
    const [selectedActionId, setSelectedActionId] = useState(null);

    const closeGoalPanel = () => {
        setShow(false);
        setSelectedSkillId(null);
        setSelectedGoalId(null); 
        setSelectedActionId(null); 
    }

    const closeActionPanel =() => {
        setShow(false);
        setSelectedGoalId(null); 
        setSelectedActionId(null); 
    }

// SKILLS
    const handleChangeSkills = (event) => {
        const value = event.target.value;
        setSkillInput(value);
        setSkillError("");
    } // a function that handles the event of putting in a value

    const handleSubmitSkill = (event) => {
        event.preventDefault();
        if (!skillInput.trim()) {
            setSkillError("This field is required.");
            return
          } 
          setSkillError(""); // clear previous error if any
          handleAddSkill(skillInput); // niet vergeten de input als argument te doen
          setSkillInput("");
        //   savedSkillId();
    } // onthou: zoveel mogelijk acties die samen uitgevoerd moeten worden in 1 functie laten, hoeft geen aparte functie voor bij te komen (handleAdd onnodig en zorgde voor bugs)


    const handleAddSkill = (skillName) => {
        setSkills([
            ...skills, 
                {
                    id: Date.now(),
                    name: skillName,
                    goals: []
                }
            ]
        )
    } //https://react.dev/learn/updating-arrays-in-state
        

    function handleEditSkill(nextSkill) {
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


// GOALS
    const handleChangeGoals = (event) => {
        const value = event.target.value;
        setGoalInput(value);
        setGoalError("");
    } // a function that handles the event of putting in a value

    const handleSubmitGoal= (event) => {
        event.preventDefault();
        if (!goalInput.trim()) {
            setGoalError("This field is required.");
            return
        } 
        setGoalError(""); // clear previous error if any
        handleAddGoal(goalInput); // niet vergeten de input als argument te doen
        setGoalInput(""); 
    }

// https://react.dev/learn/updating-arrays-in-state
    const handleAddGoal = (goalName) => {
        setSkills(skills.map(skill =>  // kijk naar elke skill in de lijst en beslis wat we er mee moeten doen
                skill.id === selectedSkillId  // is dit de skill waar user net op heeft geklikt?
                ? // zo ja (true) update het volgende in de nested structuur op basis van het gegeven argument (goalName)
                { 
                    ...skill,
                    goals: [
                        ...skill.goals, 
                        {
                            id: Date.now(),
                            name: goalName,
                            actions: []
                        }
                    ]
                }
                : skill // zo nee (false )deze skill is niet geselecteerd, geef terug zoals ie was tijdens render
            )
        )
    } //haal nu de goals uit deze geneste data en stop het in een variabele waar je easypeasy mee verder kan

        // const goals = skills.find(skill => skill.id === selectedSkillId)?.goals || []
    const selectedSkill = skills.find(
        skill => skill.id === selectedSkillId
        );
        
    const goals = selectedSkill?.goals || [];
    // dit wordt een nieuwe array die als props worden meegegeven aan het Textfield in de Goals-Card
        // deze functie in z'n totaliteit niet tussen [] stoppen want de functie creert zelf al een nieuwe array, anders wordt het buggy
    

    function handleEditGoal(nextGoal) {
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
    const handleDeleteGoal = (idToDelete) => {
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


// ACTIONS
// https://react.dev/learn/choosing-the-state-structure#avoid-deeply-nested-state ?    
    const handleChangeActions = (event) => {
        const value = event.target.value;
        setActionInput(value);
        setActionError("");
    } // a function that handles the event of putting in a value

    const handleSubmitAction = (event) => {
        event.preventDefault();
        if (!actionInput.trim()) {
            setActionError("This field is required.");
            return
        } 
        setActionError(""); // clear previous error if any
        handleAddAction(actionInput); // niet vergeten de input als argument te doen
        setActionInput(""); 
    }

// https://react.dev/learn/updating-arrays-in-state
    const handleAddAction = (actionName) => {
        setSkills(skills.map(skill => 
            skill.id === selectedSkillId
                ? 
                    { 
                        ...skill,
                            goals: skill.goals.map(goal => // na : mag alles staan dat een waarde oplevert, dus ook een functie
                                goal.id === selectedGoalId
                                    ?   {
                                        ...goal, 
                                            actions: [
                                                ...goal.actions,
                                                {
                                                    id: Date.now(),
                                                    name: actionName,
                                                }
                                            ]
                                        }
                                    : goal
                                ) 
                            }
                        : skill
                    )
                )
            }
      
    const selectedGoal = selectedSkill?.goals.find(
        goal => goal.id === selectedGoalId
      );
      
    const actions = selectedGoal?.actions || [];

    function handleEditAction(nextAction) {
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

      



    return (
        <main className="main main-skills">
            <Card title="Skills">
                <Textfield
                    error={skillError}
                    input={skillInput}
                    handleChange={handleChangeSkills}
                    handleSubmit={handleSubmitSkill}
                    formId="skill-form"
                />
                <SkillList
                    skills={skills}
                    selectedSkillId={selectedSkillId}
                    setSelectedSkillId={setSelectedSkillId}
                    handleDelete={handleDeleteSkill}
                    handleEdit={handleEditSkill}
                />
            </Card>

            {selectedSkillId && (
                <Card
                    title="Goals"
                    onClose={closeGoalPanel}>

                    <Textfield
                        error={goalError}
                        input={goalInput}
                        handleChange={handleChangeGoals}
                        handleSubmit={handleSubmitGoal}
                        formId="goal-form"
                    />
                    <GoalList
                        goals={goals}
                        selectedGoalId={selectedGoalId}
                        setSelectedGoalId={setSelectedGoalId}
                        handleDelete={handleDeleteGoal}
                        handleEdit={handleEditGoal}
                    />
            </Card>)}

            {selectedSkill && selectedGoal && (
                <Card
                    title="Actions"
                    onClose={closeActionPanel}>
                        
                    <Textfield
                        error={actionError}
                        input={actionInput}
                        handleChange={handleChangeActions}
                        handleSubmit={handleSubmitAction}
                        formId="action-form"
                    />
                    <ActionList
                        actions={actions}
                        selectedActionId={selectedActionId}
                        setSelectedActionId={setSelectedActionId}
                        handleDelete={handleDeleteAction}
                        handleEdit={handleEditAction}
                    />
            </Card>)}

        </main>
    );
}

export default Skills;