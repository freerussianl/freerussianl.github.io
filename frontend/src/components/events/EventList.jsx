import EventItem from "./EventItem";

const EventList = ({ events }) => {    
    return (
        <ul className="events"> 
            {events.map((event, index) => (
                <EventItem key={index} index={index} {...event} />
            ))}
        </ul>
    );
}

export default EventList