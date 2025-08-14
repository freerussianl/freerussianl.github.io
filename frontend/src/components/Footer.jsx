import "../assets/css/footer.css"

const Footer = ({ onSectionClick = () => {} }) => {
    const sections = [
        { id: 'About', label: 'About us' },
        { id: 'Events', label: 'Upcoming and past events' },
        { id: 'Documents', label: 'Our work' },
        { id: 'Summary', label: 'Summary' },
        { id: 'Members', label: 'Board Members' },
        { id: 'Media', label: 'Press and media' },
        { id: 'Contacts', label: 'Contacts' },
    ];

    return (
        <footer className="site-footer">
            <div className="footer-content">
                <nav aria-label="Footer navigation">
                    <ul className="footer-menu">
                        {sections.map(({ id, label }) => (
                            <li key={id} onClick={() => onSectionClick(id)}>
                                {label} →
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="anbi">
                    <a
                        href="https://www.belastingdienst.nl/wps/wcm/connect/nl/aftrek-en-kortingen/content/anbi-status-controleren"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="./images/logo-anbi.svg"
                            width="53"
                            alt="ANBI logo"
                        />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Free Russia NL. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
