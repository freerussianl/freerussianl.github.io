import "../assets/css/events.css"

const ToggleItemsButton = ({ onClick, text }) => {
    return (
        <button className="toggleItemsButton" onClick={onClick}>
            {text}
        </button>
    )
}

export default ToggleItemsButton;