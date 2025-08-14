import SettingsLayout from "../SettingsLayout";
import "../assets/css/settings.css"
import UserCreate from "../components/settings/users/UserCreate";

const UsersSettingsPage = () => {
    return (
        <SettingsLayout>
            <UserCreate />
        </SettingsLayout>
    )
};

export default UsersSettingsPage;