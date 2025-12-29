// https://react.dev/learn/typescript

type Skill = {
    id: number;
    name: string;
    goals: Goal[];
  };

type Action = {
    id: number;
    name: string;
  };
  
  type Goal = {
    id: number;
    name: string;
    actions: Action[];
  };
  

  