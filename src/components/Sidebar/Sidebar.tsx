import { useEffect } from 'react';
import { TbHome, TbPlant, TbTarget, TbHeart, TbBulb, TbStairs, TbSettings, TbChevronsRight } from "react-icons/tb";
import Logo from "./Logo/Logo";
import Option from "./Option/Option";
import Collapse from "./Collapse/Collapse";
import "./Sidebar.css";
import type { SidebarProps } from "../../../types.ts";

function Sidebar({ expanded, setExpanded, selected, setSelected } : SidebarProps) {

    useEffect(() => {
        console.log("Selected is now", selected);
      }, [selected]);


    const toggleSidebar = () => {
        setExpanded(prev => !prev)
    }

    return (
        <aside className={expanded ? "sidebar sidebar-open" : "sidebar sidebar-closed"}>
            <Logo />
                {/* <div> */}
                <Option
                    Icon={TbHome}
                    title="Dashboard"
                    path="/"
                    selected={selected}
                    setSelected={setSelected}
                    expanded={expanded}
                />
                <Option
                    Icon={TbPlant }
                    title="Skills"
                    path="/skills"
                    selected={selected}
                    setSelected={setSelected}
                    expanded={expanded}
                />
                <Option
                    Icon={TbTarget}
                    title="Progress"
                    path="/progress"
                    selected={selected}
                    setSelected={setSelected}
                    expanded={expanded}
                />
                <Option
                    Icon={TbHeart}
                    title="Mood"
                    path="/mood"
                    selected={selected}
                    setSelected={setSelected}
                    expanded={expanded}
                />
                <Option
                    Icon={TbBulb}
                    title="Knowlegde Hub"
                    path="/knowledgehub"
                    selected={selected}
                    setSelected={setSelected}
                    expanded={expanded}
                />
                <Option
                    Icon={TbStairs}
                    title="Motivation"
                    path="/motivation"
                    selected={selected}
                    setSelected={setSelected}
                    expanded={expanded}
                />
                <Option
                    Icon={TbSettings}
                    title="Settings"
                    path="/settings"
                    selected={selected}
                    setSelected={setSelected}
                    expanded={expanded}
                />
            {/* </div> */}
            <Collapse
                ChevronsRight={TbChevronsRight}
                title="Collapse"
                expanded={expanded}
                toggleSidebar={toggleSidebar}
            />
        </aside>
  );
}

export default Sidebar;