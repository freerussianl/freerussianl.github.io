import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0-rc.17/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: false,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: false,
            flipButtons: true
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "en",
        translations: {
            en: {
                consentModal: {
                    title: "This website uses cookies",
                    description: "We use cookies to analyse our traffic. We also share information about your use of our site with our analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    // showPreferencesBtn: "Manage preferences",
                },
                // preferencesModal: {
                //     title: "Consent Preferences Center",
                //     acceptAllBtn: "Accept all",
                //     acceptNecessaryBtn: "Reject all",
                //     savePreferencesBtn: "Save preferences",
                //     closeIconLabel: "Close modal",
                //     serviceCounterLabel: "Service|Services",
                //     sections: [
                //         {
                //             title: "Cookie Usage",
                //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                //         },
                //         {
                //             title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                //             linkedCategory: "necessary"
                //         },
                //         {
                //             title: "Analytics Cookies",
                //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                //             linkedCategory: "analytics"
                //         },
                //         {
                //             title: "More information",
                //             description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"#yourdomain.com\">contact me</a>."
                //         }
                //     ]
                // }
            }
        }
    }
});