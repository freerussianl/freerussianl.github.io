import ArticleItem from "./ArticleItem";



const ArticleList = ({ articles }) => {    
    return (
        <ul className="articles"> 
            {articles.map((article, index) => (
                <ArticleItem key={index} index={index} {...article} />
            ))}
        </ul>
    );
}

export default ArticleList
