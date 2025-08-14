const Summary = () => {
    const copyText = () => {
        const textToCopy = document.getElementById("textToCopy").innerText;
        navigator.clipboard.writeText(textToCopy);
    };

    return (
        <div id="Summary">
            <h1 className="maintitle">Summary</h1>
            <div className="about">
                <h4 className="title">Financial support</h4>
                <p className="text">
                We are a legal entity in the Netherlands and are entitled to accept
                donations from companies and individuals. All funds raised will be used
                for:
                <br />
                - development of Free Russia NL;<br />
                - assistance for refugees from Russia, Ukraine or Belarus;<br />
                - educational activities in the Netherlands and online.<br />
                </p>
                <span className="black">Beneficiary name: </span>
                <span className="text">Free Russia Nederland</span>
                <br />
                <span className="black">IBAN: </span>
                <span id="textToCopy">NL20ABNA0113016549</span>&nbsp;&nbsp;&nbsp;
                <img
                    src="/images/copy.svg"
                    alt="Copy"
                    onClick={() => {copyText()}}
                />
                <br />
                <p className="text">
                    We are an ANBI Foundation<br />
                    (Chamber of Commerce number: 86836935)<br />
                </p>

                <form
                    action="https://www.paypal.com/donate"
                    method="post"
                    target="_blank"
                >
                <input type="hidden" name="hosted_button_id" value="CQ4S4K5TN8RY8" />
                <input
                    type="image"
                    src="/images/paypal_en.svg"
                    name="submit"
                    title="PayPal - The safer, easier way to pay online!"
                    alt="Donate with PayPal button"
                    className="paypal-image"
                />
                </form>
                <a href="https://freerussia.nl/tikkie">
                <img src="/images/tikkie_en.svg" alt="Tikkie" className="tikkie" />
                </a>
            </div>
        </div>
    )
}

export default Summary