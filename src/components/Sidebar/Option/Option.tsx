import { Link  } from 'react-router-dom';
import { motion } from "framer-motion";
import '../Sidebar.css';

function Option( {Icon, title, path, selected, setSelected, expanded} ) {

    return (
        <Link
            to={path}
            onClick={() => {
                setSelected(title)
                // navigeer naar path 
            }} // gebruik useContext ivm prop-drilling 
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