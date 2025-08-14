import SettingsLayout from "../SettingsLayout";
import "../assets/css/settings.css"
import ArticleCreate from "../components/settings/articles/ArticleCreate";

const ArticlesSettingsPage = () => {
    return (
        <SettingsLayout>
            <ArticleCreate />
        </SettingsLayout>
    )
};

export default ArticlesSettingsPage;