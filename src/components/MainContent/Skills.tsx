import { useState, useContext } from "react";
import { ShowContext, SkillsContext, SelectedIdContext } from "../../containers/Contexts"
import Card from "./Card/Card";
import Textfield from "../Forms/Textfield"
import SkillList from "../Data/Skills/SkillList"
import GoalList from "../Data/Goals/GoalList"
import ActionList from "../Data/Actions/ActionList"
import "./MainContent.css";

function Skills() {
    const [skillInput, setSkillInput] = useState<string>("");
    const [skillError, setSkillError] = useState<string>("");
    const [goalInput, setGoalInput] = useState<string>("");
    const [goalError, setGoalError] = useState<string>("");
    const [actionInput, setActionInput] = useState<string>("");
    const [actionError, setActionError] = useState<string>("");

   // Null check functies voor de useContext hook
    const useSkillsContext = () => {
        const context = useContext(SkillsContext);
        if (context === null) {
        throw new Error("SkillsContext is null, look for provider in parent component");
        }
        return context;
    }

    const useSelectedIdContext = () => {
        const context = useContext(SelectedIdContext);
        if (context === null) {
        throw new Error("SelectedIdContext is null, look for provider in parent component");
        }
        return context;
    }

    const useShowContext = () => {
        const context = useContext(ShowContext);
        if (context === null) {
        throw new Error("ShowContext is null, look for provider in parent component");
        }
        return context;
    }

//useContext hooks
    const { skills, setSkills} = useSkillsContext()
    const { selectedSkillId, setSelectedSkillId, selectedGoalId, setSelectedGoalId, setSelectedActionId } = useSelectedIdContext();
    const { setShow} = useShowContext();






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
    const handleChangeSkills = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSkillInput(value);
        setSkillError("");
    } // a function that handles the event of putting in a value

    const handleSubmitSkill = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!skillInput.trim()) {
            setSkillError("This field is required.");
            return
          } 
          setSkillError(""); // clear previous error if any
          handleAddSkill(skillInput); // niet vergeten de input als argument te doen
          setSkillInput("");
    } // onthou: zoveel mogelijk acties die samen uitgevoerd moeten worden in 1 functie laten, hoeft geen aparte functie voor bij te komen (handleAdd onnodig en zorgde voor bugs)


    const handleAddSkill = (skillName: string) => {
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
        


// GOALS
    const handleChangeGoals = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setGoalInput(value);
        setGoalError("");
    } // a function that handles the event of putting in a value

    const handleSubmitGoal= (event: React.FormEvent<HTMLFormElement>) => {
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
    const handleAddGoal = (goalName: string) => {
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
    


// ACTIONS
// https://react.dev/learn/choosing-the-state-structure#avoid-deeply-nested-state ?    
    const handleChangeActions = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setActionInput(value);
        setActionError("");
    } // a function that handles the event of putting in a value

    const handleSubmitAction = (event: React.FormEvent<HTMLFormElement>) => {
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
    const handleAddAction = (actionName: string) => {
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
                <SkillList/>
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
                    />
            </Card>)}

        </main>
    );
}

export default Skills;