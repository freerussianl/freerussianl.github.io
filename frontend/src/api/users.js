import api from "./utils";

export async function getUsers() {
    const response = await api.get('/users');
    return response.data;
}

export async function createUser({ email, password, role }) {
    const data = {
        email,
        password,
        role,
    }
    const response = await api.post('/users', data)
    return response.data;
}