export const actions = {
    SET_TOKEN: "SET_TOKEN",
};

export function setToken(jwt) {
    return {
        type: actions.SET_TOKEN,
        jwt : jwt,
    };
}