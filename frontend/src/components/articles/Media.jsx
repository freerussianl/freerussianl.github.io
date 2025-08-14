import { useState, useEffect } from "react";
import { getArticles } from "../../api/articles";
import ArticleList from "./ArticleList";
import ToggleItemsButton from "../ToggleItemsButton";
import "../../assets/css/articles.css"

const Media = () => {
    const [articles, setArticles] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    const fetchArticles = async (limit = 5) => {
        const data = await getArticles({ limit });
        setArticles(data);
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    const toggleArticles = async () => {
        const newState = !isExpanded;
        setIsExpanded(newState);
        await fetchArticles(newState ? 25 : 5);
    };

    return (
        <div id="Media">
            <h1 className="maintitle">Press and media</h1>
            <div className="section">
                <ArticleList articles={articles} />
                <ToggleItemsButton
                    onClick={toggleArticles}
                    text={isExpanded ? "Show less" : "Show more"}
                />
            </div>
        </div>
    );
}

export default Media;