import SettingsLayout from "../SettingsLayout";
import "../assets/css/settings.css"
import DocumentCreate from "../components/settings/documents/DocumentCreate";

const DocumentsSettingsPage = () => {
    return (
        <SettingsLayout>
            <DocumentCreate />
        </SettingsLayout>
    )
};

export default DocumentsSettingsPage;