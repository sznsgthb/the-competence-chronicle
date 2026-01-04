import type { IconType } from "react-icons";
// https://react.dev/learn/typescript


export type Skill = {
    id: number;
    name: string;
    goals: Goal[];
  };
  
export  type Goal = {
    id: number;
    name: string;
    actions: Action[];
  };

export type Action = {
    id: number;
    name: string;
  };
  

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

// TYPES FOR EVENT-HANDLERS




//TYPES FOR USESTATE


// TYPES FOR USECONTEXT

//https://stackoverflow.com/questions/72652009/property-x-does-not-exist-on-type-context-null-ts2339

export type SkillsContextType = {
    skills: Skill[];
    setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
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

