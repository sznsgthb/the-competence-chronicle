import Card from './Card/Card';
import SkillMap from "../Data/SkillMap/SkillMap"
import './MainContent.css';
// import placeholderbubbles from "../../assets/placeholder-bubbles.png";

function Dashboard({ skills }) {

    const data = {
        name: "Skills",
        children: skills.map(skill => ({
          name: skill.name,
          children: (skill.goals || []).map(goal => ({
            name: goal.name,
            children: (goal.actions || []).map(action => ({
              name: action.name,
              value: 1  
            })),
            // als een goal geen acties heeft, geef een placeholder value zodat bubbeltje toch zichtbaar is ook al heeft het geen actions
            value: (goal.actions || []).length === 0 ? 1 : undefined
          })),
          // als een skill geen goals heeft, geef een placeholder value zodat bubbeltje toch zichtbaar is ook al heeft het geen goals
          value: (skill.goals || []).length === 0 ? 1 : undefined
        }))
      }; //zie https://nivo.rocks/circle-packing/ tablad data voor voorbeelddata structuur

      console.log(JSON.stringify(data, null, 2));


    return (
        <main className="main main-dashboard">
            <Card title={"Skill Map"}>
                <SkillMap data={data} />
            </Card>

            <Card title={"Overview"}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Card>
        </main>
    );
}

export default Dashboard;