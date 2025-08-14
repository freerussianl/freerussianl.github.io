import { useRef, useState } from "react";
import { createEvent } from "../../../api/events";

const EventCreate = () => {
    const formRef = useRef();
    const [message, setMessage] = useState("");

    async function handleEventCreate(e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const date = document.getElementById('date').value;
        const link = document.getElementById('link').value;

        try {
            await createEvent({ title, date, link });
            formRef.current.reset();
            setMessage("✅ Событие успешно создано!");
        } catch (error) {
            setMessage("❌ Ошибка при создании события. Попробуйте снова.");
            console.error(error); // Для отладки в консоли
        }
    }

    return (
        <div className="event-create-wrapper">
            <form ref={formRef} id="eventCreate">
                <label htmlFor='title'>Введите название события:</label>
                <input type="text" id="title" required />

                <label htmlFor='link'>Введите ссылку на событие:</label>
                <input type="text" id="link" required />

                <label htmlFor="date">Выберите дату:</label>
                <input type="datetime-local" id="date" name="datetime" required />

                <button type="submit" onClick={handleEventCreate}>
                    Создать
                </button>
            </form>

            {message && <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{message}</p>}
        </div>
    );
};

export default EventCreate;
