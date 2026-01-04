import Card from './Card/Card';
import './MainContent.css';
import comingsoon from "../../assets/comingsoon.png";

function KnowledgeHub() {

    return (
        <main className="main">
            <Card title="Knowledge Hub">
              <div className="coming-soon-div">
                    <img className="coming-soon-img" src={comingsoon} alt="coming soon" />
                </div>
            </Card>
        </main>
    );
}

export default KnowledgeHub;