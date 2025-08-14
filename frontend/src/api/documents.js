import axios from "axios";

export async function getDocuments({ limit, offset}) {
    const params = {
        limit,
        offset,
        sort_desc: true,
    };

    const response = await axios.get("http://localhost:8000/api/documents", { params });
    return response.data;
}

export async function createDocument({ file, title }) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
        `http://localhost:8000/api/documents?title=${encodeURIComponent(title)}`, // title в query
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );
    return response.data;
}

