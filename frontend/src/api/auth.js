import axios from "axios";

export async function createToken({ email, password }) {
    const data = {
        email,
        password,
    }
    const response = await axios.post('http://localhost:8000/api/auth/token', data);
    return response.data.access_token;
}
