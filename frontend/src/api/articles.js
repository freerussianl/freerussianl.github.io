import api from "./utils";

export async function getArticles({ limit, offset}) {
    const params = {
        limit,
        offset,
        sort_desc: true,
    };

    const response = await api.get("/articles", { params });
    return response.data;
}


export async function createArticle({ title, link }) {
    const data = {
        title,
        link,
    }
    const response = await api.post('/articles', data);
    return response.data;
}
