const DocumentItem = ({ title, oid }) => {
    return (
        <div className="document">
            <p className="item-title">{title}</p>
            <div className="button_container">
                <a href={`http://localhost:8000/api/documents/${oid}`}>
                    <img src="/images/download.svg" alt="download" />
                </a>
            </div>
            <hr></hr>
        </div>
    );
};

export default DocumentItem;
