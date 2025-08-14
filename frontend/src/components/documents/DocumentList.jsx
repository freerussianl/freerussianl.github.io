import DocumentItem from "./DocumentItem";


const DocumentList = ({ documents }) => {    
    return (
        <ul className="documents"> 
            {documents.map((document, index) => (
                <DocumentItem key={index} index={index} {...document} />
            ))}
        </ul>
    );
}

export default DocumentList