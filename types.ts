import type { IconType } from "react-icons";
// https://react.dev/learn/typescript

//TYPES FOR DATA STRUCTURES

export type SkillType = {
    id: number;
    name: string;
    goals: GoalType[];
  };
  
export  type GoalType = {
    id: number;
    name: string;
    actions: ActionType[];
  };

export type ActionType = {
    id: number;
    name: string;
  };
  
export type CirclePackingData = {
    name: string;
    children?: CirclePackingData[];
    value?: number;
} // of voor elk level een apart type maken? of union? 


// TYPES FOR PROPS

export type SidebarProps = {
    expanded: boolean;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export type OptionProps = {
    Icon: IconType;
    title: string;
    path: string;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
    expanded: boolean;
}

export type CollapseProps = {
    ChevronsRight: IconType;
    title: string
    toggleSidebar: () => void;
    expanded: boolean;
}

export type CardProps = {
    title: string;
    children: React.ReactNode; //https://blog.logrocket.com/react-children-prop-typescript/
    onClose?: () => void; //close button is optioneel
}


// export type SkillListProps = {
    
// }

export type GoalListProps = {
    goals: GoalType[]
}

export type ActionListProps = {
    // actions: ActionType;             Dit kan dus niet want dan geef je 1 object constructie  aan iets wat een array moet zijn waar de objectconstructie meermalen in gaat zitten
    actions: ActionType[]
}

export type SkillProps = {
    skill: SkillType,
    onClick: () => void; //void, want functie berekent en update alleen nieuwe staat, voert side effect uit, maar returnt niets aan de caller
    handleEdit: (nextSkill: SkillType) => void;
    handleDelete: (idToDelete: number) => void;
}

export type GoalProps = {
    goal: GoalType,
    onClick: () => void;
    handleEdit: (nextGoal: GoalType) => void;
    handleDelete: (idToDelete: number) => void;
}

export type ActionProps = {
    action: ActionType,
    onClick: () => void;
    handleEdit: (nextAction: ActionType) => void;
    handleDelete: (idToDelete: number) => void;
}

export type TextfieldProps = {
    input: string,
    formId: string,
    error: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; //https://www.w3schools.com/typescript/typescript_react.php
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void; //https://medium.com/@sandupa.egodage/react-form-with-typescript-c74510b2f9d3
}


export type SkillMapProps = {
    data: CirclePackingData;
}


export type AddButtonProps = {
    type: "submit" | "reset" | "button" | undefined
    form: string;
}

export type EditButtonProps = {
    onClick: () => void;
}

export type DeleteButtonProps = {
    onClick: () => void;
}

export type SaveButtonProps = {
    onClick: () => void;
}

export type CloseButtonProps = {
    onClose: () => void;
}




// TYPES FOR EVENT-HANDLERS
//inline getypt


//TYPES FOR USESTATE
// inline getypt

// TYPES FOR USECONTEXT
//https://stackoverflow.com/questions/72652009/property-x-does-not-exist-on-type-context-null-ts2339

export type SkillsContextType = {
    skills: SkillType[];
    setSkills: React.Dispatch<React.SetStateAction<SkillType[]>>;
  };

  export type ShowContextType = {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
  };
  
export type  SelectedIdContextType = {
    selectedSkillId: number | null;
    setSelectedSkillId: React.Dispatch<React.SetStateAction<number | null>>;
    selectedGoalId: number | null;
    setSelectedGoalId: React.Dispatch<React.SetStateAction<number | null>>;
    selectedActionId: number | null;
    setSelectedActionId: React.Dispatch<React.SetStateAction<number | null>>;
}

