import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import SettingsPage from "./pages/SettingsPage";
import ArticlesSettingsPage from "./pages/ArticlesSettingsPage";
import DocumentsSettingsPage from "./pages/DocumentsSettingsPage";
import UsersSettingsPage from "./pages/UsersSettingsPage";
import LoginPage from "./pages/LoginPage";
import LinksPage from "./pages/LinksPage";

export function App() {
    return (
        <Routes>
            <Route 
                path="/" 
                element={<IndexPage/>} 
            />
            <Route 
                path="/login" 
                element={<LoginPage/>} 
            />
            <Route 
                path="/links" 
                element={<LinksPage/>} 
            />
            <Route
                path="/settings" 
                element={<SettingsPage/>} 
            />
            <Route 
                path="/settings/articles" 
                element={<ArticlesSettingsPage/>} 
            />
            <Route 
                path="/settings/documents" 
                element={<DocumentsSettingsPage />} 
            />
            <Route 
                path="/settings/users" 
                element={<UsersSettingsPage />} 
            />
        </Routes>
    );
}

export default App;