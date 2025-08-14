import { useRef, useState } from "react";
import { createUser } from "../../../api/users";

const UserCreate = () => {
    const formRef = useRef();
    const [message, setMessage] = useState("");

    async function handleUserCreate(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

        try {
            await createUser({ email, password, role });
            formRef.current.reset();
            setMessage("✅ Пользователь успешно добавлен!");
        } catch (error) {
            setMessage("❌ Ошибка при добавлении пользователя.");
            console.error(error);
        }
    }

    return (
        <div className="event-create-wrapper">
            <form ref={formRef} id="eventCreate">
                <label htmlFor='title'>Введите почту администратора:</label>
                <input type="email" id="email" required />

                <label htmlFor='link'>Введите пароль администратора:</label>
                <input type="password" id="password" required />

                <label htmlFor="role">Выберите роль:</label>
                    <select id="role" name="role">
                    <option value="admin">Администратор</option>
                </select>

                <button type="submit" onClick={handleUserCreate}>
                    Добавить
                </button>
            </form>

            {message && <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{message}</p>}
        </div>
    );
};

export default UserCreate;
