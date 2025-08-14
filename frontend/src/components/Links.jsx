const Links = () => {
    return (
        <div id="Links">
            <h1 className="maintitle">Follow us</h1>
            <div className="links">
                <div className="button_container">
                    <a href="https://t.me/FreeRussiaNL">
                        <img src="/images/tg.png" alt="Telegram" />
                    </a>
                    <a href="https://facebook.com/FreeRussiaNL">
                        <img src="/images/fb.png" alt="Facebook" />
                    </a>
                    <a href="https://instagram.com/freerussia.nl">
                        <img src="/images/ig.png" alt="Instagram" />
                    </a>
                    <a href="https://twitter.com/russia_nl">
                        <img src="/images/tw.png" alt="Twitter" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCU9wy4JM-OagJfIhWI4U9MA">
                        <img src="/images/ut.png" alt="Youtube" />
                    </a>
                    <a href="/links">
                        <span className="maintitle black">More</span>
                    </a>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Links;
