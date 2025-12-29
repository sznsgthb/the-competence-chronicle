import CloseButton from "../../Buttons/CloseButton";
import './Card.css';

function Card({ title, children, onClose }) {

    return (
        <section className="card-glass">
            <span className="card-title">
                <h2>
                    {title}
                </h2>
                {onClose && <CloseButton onClose={onClose} /> }
            </span>
            <div className={"card-content"}>{children}</div>
        </section>
    );
}

export default Card;