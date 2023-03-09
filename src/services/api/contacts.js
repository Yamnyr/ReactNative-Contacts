const BASE_URL = "http://localhost:3000";

export async function fetchAllContact(jwt) {
    return fetch(`${BASE_URL}/api/contacts`, {
        method: "GET",
        headers: {
            // "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
        },
    })
        .then((response) => response.json())

        .catch((error) => {
            console.log(error);
        });
}
export async function fetchContact(jwt, id) {
    return fetch(`${BASE_URL}/api/contact/${id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    })
        .then((response) => response.json())

        .catch((error) => {
            console.log(error);
        });
}
export async function editContact(jwt, params, id) {
    return fetch(`${BASE_URL}/api/contact/${id}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
    })
        .then((response) => response.json())

        .catch((error) => {
            console.log(error);
        });
}
export async function deleteContact(jwt, id) {
    return fetch(`${BASE_URL}/api/contact/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    })
        .then((response) => response.json())

        .catch((error) => {
            console.log(error);
        });
}
