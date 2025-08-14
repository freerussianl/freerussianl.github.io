import { useRef, useState } from "react";
import { createDocument } from "../../../api/documents";

const DocumentCreate = () => {
    const formRef = useRef();
    const [message, setMessage] = useState("");

    async function handleArticleCreate(e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const fileInput = document.getElementById('file');
        const file = fileInput.files[0];

        if (!file) {
            setMessage("❌ Пожалуйста, выберите файл.");
            return;
        }

        if (!title) {
            setMessage("❌ Пожалуйста, укажите заголовок.");
            return;
        }

        try {
            await createDocument({ file, title });

            formRef.current.reset();
            setMessage("✅ Документ успешно загружен!");
        } catch (error) {
            setMessage("❌ Ошибка при добавлении документа.");
            console.error(error);
        }
    }

    return (
        <div className="event-create-wrapper">
            <form ref={formRef} id="eventCreate" onSubmit={handleArticleCreate}>
                <label htmlFor='title'>Введите заголовок (title) для документа:</label>
                <input type="text" id="title" required />

                <label htmlFor='file'>Выберите файл:</label>
                <input type="file" id="file" required />

                <button type="submit">
                    Добавить
                </button>
            </form>

            {message && <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{message}</p>}
        </div>
    );
};

export default DocumentCreate;
