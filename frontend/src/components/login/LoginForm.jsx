import { useRef, useState } from "react";
import { createToken } from "../../api/auth";

const LoginForm = () => {
    const formRef = useRef();
    const [message, setMessage] = useState("");

    async function handleLoginSubmit(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const token = await createToken({ email, password });
            formRef.current.reset();
            document.cookie = `token=${token}; path=/; max-age=3600; secure; samesite=strict`;
            window.location.href = '/settings';
        } catch (error) {
            setMessage("❌ Ошибка входа");
            console.error(error);
        }
    }

    return (
        <div className="event-create-wrapper">
            <form ref={formRef} id="eventCreate">
                <label htmlFor='email'>Введите Ваш логин: </label>
                <input type="email" id="email" required />

                <label htmlFor='password'>Введите Ваш пароль: </label>
                <input type="password" id="password" required />

                <button type="submit" onClick={handleLoginSubmit}>
                    Войти
                </button>
            </form>

            {message && <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{message}</p>}
        </div>
    );
};

export default LoginForm;
