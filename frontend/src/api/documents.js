import api from "./utils";

export async function getDocuments({ limit, offset}) {
    const params = {
        limit,
        offset,
        sort_desc: true,
    };

    const response = await api.get("/documents", { params });
    return response.data;
}

export async function createDocument({ file, title }) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await api.post(
        `/documents?title=${encodeURIComponent(title)}`, // title в query
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );
    return response.data;
}

