import { Link  } from 'react-router-dom';
import { motion } from "framer-motion";
import '../Sidebar.css';
import type { OptionProps } from "../../../../types";


function Option( {Icon, title, path, selected, setSelected, expanded} : OptionProps ) {

    return (
        <Link
            to={path}
            onClick={() => {
                setSelected(title)
                // navigeer naar path 
            }}
            className={selected === title ? "nav selected-option" : "nav"}
        >   
            <Icon 
                className="icon nav-icon"
            />
                {expanded && (
                    <motion.span
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.125}}
                    >{title}</motion.span>
                )}
                
        </Link>
  );
}

export default Option; 