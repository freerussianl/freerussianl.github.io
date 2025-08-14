import axios from "axios";

export async function getEvents({ limit, offset}) {
    const params = {
        limit,
        offset,
        sort_desc: true,
    };

    const response = await axios.get("http://localhost:8000/api/events", { params });
    return response.data;
}

export async function createEvent({ title, date, link }) {
    const data = {
        title,
        date,
        link,
    }
    const response = await axios.post('http://localhost:8000/api/events', data);
    return response.data;
}
