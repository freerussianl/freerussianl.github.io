import axios from "axios";

export async function getUsers() {
    const response = await axios.get('http://localhost:8000/api/users');
    return response.data;
}

export async function createUser({ email, password, role }) {
    const data = {
        email,
        password,
        role,
    }
    const response = await axios.post('http://localhost:8000/api/users', data)
    return response.data;
}