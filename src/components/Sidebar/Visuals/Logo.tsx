import { motion } from "framer-motion";
import './Logo.css';
import placeholderpumpkin from "../../../assets/pumpkin.png";

function Logo() {

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="logo">
                <img src={placeholderpumpkin} alt="logo" />
        </motion.div>
  );
}

export default Logo;