import { formatDateTime } from "../../utils";

const EventItem = ({ date, title, description, link }) => {
    const eventDate = new Date(date);
    const now = new Date();

    const isPast = eventDate < now;

    return (
        <div className="event">
            <li className={`${isPast ? 'past' : 'actual'}`}>
            <span className="date">{formatDateTime(date)}</span>
            <a href={link} className={`item-title ${isPast ? 'past' : ''}`}>
                {title}
            </a>
                {description && <p>{description}</p>}
            </li>
            <hr></hr>
        </div>
    );
};

export default EventItem;
