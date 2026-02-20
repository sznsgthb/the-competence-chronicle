import SearchField  from './SearchField';
// import ProfileBar from './ProfileBar/ProfileBar';
import './Header.css';
// import toggle from "../../assets/day-night.png";
import { TbMoonFilled, TbBellFilled } from "react-icons/tb";


function Header() {

    return (
        <header className="dashboard-header">
            <SearchField />

            <span className="header-icons">
                <button type="button">
                    {/* <img src={toggle} alt="Profile" />*/}
                     <TbMoonFilled className="toggle-icon" />
                </button>
                <button type="button">
                    {/* <img src={toggle} alt="Profile" />*/}
                     <TbBellFilled className="notification-icon" />
                </button>
            </span>
        </header>
  );
}

export default Header;