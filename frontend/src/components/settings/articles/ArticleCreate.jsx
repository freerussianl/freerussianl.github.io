import { useRef, useState } from "react";
import { createEvent } from "../../../api/events";
import { createArticle } from "../../../api/articles";

const ArticleCreate = () => {
    const formRef = useRef();
    const [message, setMessage] = useState("");

    async function handleArticleCreate(e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const link = document.getElementById('link').value;

        try {
            await createArticle({ title, link });
            formRef.current.reset();
            setMessage("✅ Статья успешно добавлена!");
        } catch (error) {
            setMessage("❌ Ошибка при добавлении статьи. Попробуйте снова.");
            console.error(error);
        }
    }

    return (
        <div className="event-create-wrapper">
            <form ref={formRef} id="eventCreate">
                <label htmlFor='title'>Введите название статьи:</label>
                <input type="text" id="title" required />

                <label htmlFor='link'>Введите ссылку на статью:</label>
                <input type="text" id="link" required />

                <button type="submit" onClick={handleArticleCreate}>
                    Создать
                </button>
            </form>

            {message && <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{message}</p>}
        </div>
    );
};

export default ArticleCreate;
