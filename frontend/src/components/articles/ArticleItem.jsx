import { formatDateTime } from "../../utils";

const ArticleItem = ({ created_at, title, link }) => {
    return (
        <>
            <li className='article'>
            <span className="date">{formatDateTime(created_at)}</span>
            <a href={link} className="item-title" target="_blank" rel="noopener noreferrer">
                {title}
            </a>
            </li>
            <hr></hr>
        </>

    );
};

export default ArticleItem;
