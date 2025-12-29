import SearchField  from './SearchField';
// import ProfileBar from './ProfileBar/ProfileBar';
import './Header.css';
import profilepicture from "../../assets/profile-picture.png";

function Header() {

    return (
        <header className="dashboard-header">
            <SearchField />
                <button type="button">
                    <img src={profilepicture} alt="Profile" />
                </button>
        </header>
  );
}

export default Header;