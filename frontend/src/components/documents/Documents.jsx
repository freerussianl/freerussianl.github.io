import { useEffect, useState } from "react";
import "../../assets/css/events.css";
import DocumentList from "./DocumentList";
import { getDocuments } from "../../api/documents";
import ToggleItemsButton from "../ToggleItemsButton";
import "../../assets/css/documents.css"

const Documents = () => {
    const [documents, setDocuments] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    const fetchDocuments = async (limit = 5) => {
        const data = await getDocuments({ limit });
        setDocuments(data);
    };

    useEffect(() => {
        fetchDocuments();
    }, []);

    const toggleDocuments = async () => {
        const newState = !isExpanded;
        setIsExpanded(newState);
        await fetchDocuments(newState ? 25 : 5);
    };

    return (
        <div id="Documents">
            <h1 className="maintitle">Our work</h1>
            <div className="section">
                <DocumentList documents={documents} />
                <ToggleItemsButton
                    onClick={toggleDocuments}
                    text={isExpanded ? "Show less" : "Show more"}
                />
            </div>
        </div>
    );
};

export default Documents;
