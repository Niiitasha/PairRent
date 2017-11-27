const INITIAL_STATE = {
    matches: [],
    isLoading: true
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case "REQUEST_MATCHES":
            return Object.assign({}, state, {
                isLoading: true
            });
        case "RECEIVE_MATCHES":
            return Object.assign({}, state, {
                matches: action.matches,
                isLoading: false
            });
        default:
            return state;
    }
}