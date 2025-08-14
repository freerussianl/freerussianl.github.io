import EventCreate from "../components/settings/events/EventCreate";
import SettingsLayout from "../SettingsLayout";
import "../assets/css/settings.css"

const SettingsPage = () => {
    return (
        <SettingsLayout>
            <EventCreate />
        </SettingsLayout>
    )
};

export default SettingsPage;