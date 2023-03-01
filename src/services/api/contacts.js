const BASE_URL = "http://localhost:3000";

export async function contactList(data) {
    return fetch(`${BASE_URL}/api/contacts`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",

        },
    })
        .then((response) => response.json())

        .catch((error) => {
            console.log(error);
        });
}
