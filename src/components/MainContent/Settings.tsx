import Card from './Card/Card';
import './MainContent.css';
import comingsoon from "../../assets/comingsoon.png";

function Settings() {

    return (
        <main className="main">
            <Card title="Settings">
            <   div className="coming-soon-div">
                    <img className="coming-soon-img" src={comingsoon} alt="coming soon" />
                </div>
            </Card>
        </main>
    );
}

export default Settings;