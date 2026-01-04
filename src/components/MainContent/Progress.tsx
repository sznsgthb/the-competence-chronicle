import Card from './Card/Card';
import './MainContent.css';
import comingsoon from "../../assets/comingsoon.png";

function Progress() {

    return (
        <main className="main main-progress">
            <Card title="Progress">
                <div className="coming-soon-div">
                    <img className="coming-soon-img" src={comingsoon} alt="coming soon" />
                </div>
            </Card>
        </main>
    );
}

export default Progress;