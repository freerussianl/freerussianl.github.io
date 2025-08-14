const Contacts = () => {
    return (
        <div id="Contacts">
            <h1 className="maintitle">Contacts</h1>
            <div className="about">
                <br />
                <p className="text">
                    Become a volunteer! We value enthusiasm and a variety of skills. Join our team or share your story in our blog:
                </p>

                <div className="mail centered">
                    <img src="/images/envelope.svg" alt="envelope" />
                    <a href="mailto:weare@freerussia.nl">weare@freerussia.nl</a>
                </div>

                <br />
                <p className="text">
                    If you represent the media, get in touch with us:
                </p>

                <div className="mail centered">
                    <img src="/images/envelope.svg" alt="envelope" />
                    <a href="mailto:press@freerussia.nl">press@freerussia.nl</a>
                </div>

                <br />
                <br />
            </div>
        </div>
    );
};

export default Contacts;
