import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShowContext, SkillsContext, SelectedIdContext } from "./Contexts"
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Dashboard from '../components/MainContent/Dashboard';
import Skills from '../components/MainContent/Skills';
import Progress from '../components/MainContent/Progress';
import Mood from '../components/MainContent/Mood';
import KnowledgeHub from '../components/MainContent/KnowledgeHub';
import Motivation from '../components/MainContent/Motivation';
import Settings from '../components/MainContent/Settings';
import './App.css'
import type { SkillType } from "../../types";

function App() {
    const [expanded, setExpanded] = useState<boolean>(true); 
    const [selected, setSelected] = useState<string>("Dashboard");
    const [show, setShow] = useState<boolean>(true);
    const [skills, setSkills] = useState<SkillType[]>(() => { 
        const savedData = localStorage.getItem("skills"); //haal de data in string-vorm weer uit de localStorage
        return savedData ? JSON.parse(savedData ) : []; // en parse het naar een array met objecten die door javascript en de functies weer gelezen kunnen worden
    });
    const [selectedSkillId, setSelectedSkillId] = useState<number | null>(null); 
    const [selectedGoalId, setSelectedGoalId] = useState<number | null>(null); 
    const [selectedActionId, setSelectedActionId] = useState<number | null>(null); 

    useEffect(() => {
        localStorage.setItem("skills", JSON.stringify(skills)) //localStorage leest alleen strings en omdat het objecten zijn moet het gestringified worden die in een JSON format leesbaar worden
    }, [skills]) //dus elke keer als 'skills' verandert, wordt deze functie gerunt en de gewijzigde skills-inhoud bewaard
    //Not-empty dependency array -> code inside your useEffect runs every time any variables you put inside the dependency array change.


    return (
        <BrowserRouter basename="/the-competence-chronicle">
            <div className="parent-app">
                        <ShowContext value={{ show, setShow }}>
                            <SkillsContext value={{ skills, setSkills }}>
                                <SelectedIdContext value={{ selectedSkillId, setSelectedSkillId, selectedGoalId, setSelectedGoalId, selectedActionId, setSelectedActionId }}>
                                <Header />
                                <Sidebar expanded={expanded} setExpanded={setExpanded} selected={selected} setSelected={setSelected} />              
                                <Routes>
                                    <Route path="/" element={<Dashboard />} />
                                    <Route path="/dashboard" element={<Dashboard />} />
                                    <Route path="/skills" element={<Skills />} />
                                    <Route path="/progress" element={<Progress />} />
                                    <Route path="/mood" element={<Mood />} />
                                    <Route path="/knowledgehub" element={<KnowledgeHub />} />
                                    <Route path="/motivation" element={<Motivation />} />
                                    <Route path="/settings" element={<Settings />} />
                                </Routes>
                                </SelectedIdContext>
                            </SkillsContext>
                        </ShowContext>
            </div>
        </BrowserRouter>
    )
}

{/* routing aanleggen, als deze click, dan hierheen, als deze click, dan hierheen
maar een aantal componenten blijven hetzelfde, namelijk de header en sidebar
 */}

export default App
