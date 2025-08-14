import "../assets/css/links.css";

const LinksPage = () => {
  return (
    <div className="container">
        <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
        />
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
        />
        <div className="media">
        <img
          src="../../images/logo_rainbow.png"
          className="m-3"
          alt="FreeRussia NL logo"
          width="75"
          height="75"
        />
        <div className="media-body m-2">
          <h5 className="align-items-center mt-2">FreeRussia NL</h5>
        </div>
      </div>

      <div className="mt-4">
        <a
          href="https://nowarproject.myspreadshop.nl"
          className="btn btn-outline-dark btn-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-tshirt"></i>&nbsp;Merchandise
        </a>
        <br />

        <a
          href="https://freerussia.nl/tikkie"
          className="btn btn-outline-dark btn-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-donate"></i>&nbsp;Donate via Tikkie
        </a>
        <br />

        <a
          href="https://www.paypal.com/donate/?hosted_button_id=84JYPVPQE5BEN"
          className="btn btn-outline-dark btn-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-paypal"></i>&nbsp;Donate via Paypal
        </a>
        <br />

        <a
          href="http://bit.ly/FRNLnewsletter"
          className="btn btn-outline-dark btn-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>&nbsp;Subscribe to our newsletter (Nederlands)
        </a>
        <br />

        <a
          href="https://instagram.com/freerussia.nl"
          className="btn btn-outline-dark btn-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>&nbsp;Instagram
        </a>
        <br />

        <a
          href="https://twitter.com/russia_nl"
          className="btn btn-outline-dark btn-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>&nbsp;Twitter
        </a>
        <br />

        <a
          href="https://facebook.com/FreeRussiaNL"
          className="btn btn-outline-dark btn-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>&nbsp;Facebook
        </a>
        <br />

        <a
          href="https://t.me/FreeRussiaNL"
          className="btn btn-outline-dark btn-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-telegram"></i>&nbsp;Telegram
        </a>
        <br />

        <a
          href="https://youtube.com/channel/UCU9wy4JM-OagJfIhWI4U9MA"
          className="btn btn-outline-dark btn-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube"></i>&nbsp;YouTube
        </a>
        <br />

        <a
          href="https://linkedin.com/company/free-russia-nl/"
          className="btn btn-outline-dark btn-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>&nbsp;LinkedIn
        </a>
        <br />

        <a
            href="https://mastodon.social/@freerussianl"
            className="btn btn-outline-dark btn-block mb-4"
            target="_blank"
            rel="noopener noreferrer"
        >
          <i className="fab fa-mastodon"></i>&nbsp;Mastodon
        </a>
      </div>
    </div>
  );
};

export default LinksPage;
