import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
    const [expanded, setExpanded] = useState(true);
    const [selected, setSelected] = useState("Dashboard");
    const [show, setShow] = useState(true);
    const [skills, setSkills] = useState(() => { 
        const savedData = localStorage.getItem("skills"); //haal de data in string-vorm weer uit de localStorage
        return savedData ? JSON.parse(savedData ) : []; // en parse het naar een array met objecten die door javascript en de functies weer gelezen kunnen worden
    });

    useEffect(() => {
        localStorage.setItem("skills", JSON.stringify(skills)) //localStorage leest alleen strings en omdat het objecten zijn moet het gestringified worden die in een JSON format leesbaar worden
    }, [skills]) //dus elke keer als 'skills' verandert, wordt deze functie gerunt en de gewijzigde skills-inhoud bewaard
    //Not-empty dependency array -> code inside your useEffect runs every time any variables you put inside the dependency array change.


    const toggleSidebar = () => {
        setExpanded(prev => !prev)
    }



  return (
    <BrowserRouter>
        <div className="parent-app">
            <Header />
            <Sidebar expanded={expanded} toggleSidebar={toggleSidebar} selected={selected} setSelected={setSelected}/>              
            <Routes>
                <Route path="/" element={<Dashboard skills={skills} />} />
                <Route path="/skills" element={<Skills skills={skills} setSkills={setSkills} setShow={setShow} />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/mood" element={<Mood />} />
                <Route path="/knowledgehub" element={<KnowledgeHub />} />
                <Route path="/motivation" element={<Motivation />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
            </div>
        </BrowserRouter>
  )
}

{/* routing aanleggen, als deze click, dan hierheen, als deze click, dan hierheen
maar een aantal componenten blijven hetzelfde, namelijk de header en sidebar
 */}

export default App
