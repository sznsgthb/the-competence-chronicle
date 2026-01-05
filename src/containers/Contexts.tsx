import { createContext } from "react";
import type { SkillsContextType, ShowContextType, SelectedIdContextType } from "../../types";


// https://stackoverflow.com/questions/73456115/passing-state-through-context-in-react-gives-error-ts2339-property-setimage
// dummy functies + null checks
export const ShowContext = createContext<ShowContextType>({
    show: true,
    setShow: () => {},
});

export const SkillsContext = createContext<SkillsContextType>({
    skills: [],
    setSkills: () => [],
});

export const SelectedIdContext = createContext<SelectedIdContextType>({
    selectedSkillId: null,
    setSelectedSkillId: () => null,
    selectedGoalId: null,
    setSelectedGoalId: () => null,
    selectedActionId: null,
    setSelectedActionId: () => null,
});