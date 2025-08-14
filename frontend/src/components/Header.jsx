import { Link } from "react-router-dom";

const Header = ({ onSectionClick }) => {
    return (
        <header>
            <img 
                src="/images/logo_full.svg" 
                alt="Free Russia NL logo" 
                className="logo" 
            />
            <div className="button_container">
                <button className="header_donate">
                    <img
                        src="/images/header_donate.svg"
                        alt="Donate"
                        className="img_donate"
                        onClick={() => onSectionClick('Summary')}
                    />
                </button>
                <Link to="/ru">
                    <button className="header_language">RU</button>
                </Link>
            </div>
        </header>
    )
}

export default Header;