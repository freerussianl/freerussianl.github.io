import axios from "axios";

export async function getArticles({ limit, offset}) {
    const params = {
        limit,
        offset,
        sort_desc: true,
    };

    const response = await axios.get("http://localhost:8000/api/articles", { params });
    return response.data;
}


export async function createArticle({ title, link }) {
    const data = {
        title,
        link,
    }
    const response = await axios.post('http://localhost:8000/api/articles', data);
    return response.data;
}