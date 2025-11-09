import api from "./utils";

export async function getEvents({ limit, offset}) {
    const params = {
        limit,
        offset,
        sort_desc: true,
    };

    const response = await api.get("/events", { params });
    return response.data;
}

export async function createEvent({ title, date, link }) {
    const data = {
        title,
        date,
        link,
    }
    const response = await api.post('/events', data);
    return response.data;
}
