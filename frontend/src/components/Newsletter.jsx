import { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState('')

    function handleSubscribe() {
        const encodedEmail = encodeURIComponent(email);
        const url = `https://frnlnewsletter.hosted.phplist.com/lists/?p=subscribe&email=${encodedEmail}&emailconfirm=${encodedEmail}`;
        window.location.href = url;
    }

    return (
        <div id="Newsletter">
            <br />
            <h1 className="maintitle">Stay informed</h1>
            <div className="button_container">
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    value={email}
                    placeholder="naam@freerussia.nl"
                    className="email"
                />
                <button className="header_language" onClick={() => handleSubscribe()}>
                    <img src="/Plus.svg"></img>
                </button>
            </div>
            <p className="past">Sign up for our newsletter</p>
        </div>
  )
}

export default Newsletter;