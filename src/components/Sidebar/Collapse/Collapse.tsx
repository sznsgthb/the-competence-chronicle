import { motion } from "framer-motion";
import './Collapse.css';

function Collapse( {ChevronsRight, title, toggleSidebar, expanded} ) {

    return (
        <button className="nav-collapse" onClick={toggleSidebar} >
            <ChevronsRight
                className={expanded ? "nav-icon rotate-icon" : "nav-icon"}
            />
            {expanded &&(
                <motion.span
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.125}}
                >{title}</motion.span>
                // hier komt de span met daarin de tekst
            )}
        </button>
  );
}

export default Collapse; 