import { useEffect, useState } from "react";
import EventList from "./EventList";
import { getEvents } from "../../api/events";
import "../../assets/css/events.css";
import ToggleItemsButton from "../ToggleItemsButton";

const Events = () => {
    const [events, setEvents] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    const fetchEvents = async (limit = 5) => {
        const data = await getEvents({ limit });
        setEvents(data);
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const toggleEvents = async () => {
        const newState = !isExpanded;
        setIsExpanded(newState);
        await fetchEvents(newState ? 25 : 5);
    };

    return (
        <div id="Events">
            <h1 className="maintitle">Upcoming and past events</h1>
            <div className="about">
                <EventList events={events} />
                <ToggleItemsButton
                    onClick={toggleEvents}
                    text={isExpanded ? "Show fewer events" : "Show all events"}
                />
            </div>
        </div>
    );
};

export default Events;
