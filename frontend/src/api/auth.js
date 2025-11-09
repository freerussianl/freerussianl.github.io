import api from "./utils";

export async function createToken({ email, password }) {
    const data = {
        email,
        password,
    }
    const response = await api.post('/auth/token', data);
    return response.data.access_token;
}
