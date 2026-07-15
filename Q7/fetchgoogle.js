const fetch = require("node-fetch").default;

async function fetchGoogle() {
    try {
        const response = await fetch("https://www.google.com", {
            headers: {
                "User-Agent": "Mozilla/5.0"
            }
        });

        const data = await response.text();

        console.log("Status Code:", response.status);
        console.log(data.substring(0, 500));
    } catch (err) {
        console.log(err.message);
    }
}

fetchGoogle();