import './Logo.css';
import profilepicture from "../../../assets/profile-picture.png";

function Logo({ expanded }: { expanded: boolean }) {

    return (
        <div className={`logo ${expanded ? "logo-expanded" : ""}`}>
        <img src={profilepicture} alt="logo" />
      </div>
  );
}

export default Logo;