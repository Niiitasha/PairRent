const INITIAL_STATE = {
    profiles: [],
    isLoading: true
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case "REQUEST_PROFILES":
            return Object.assign({}, state, {
                isLoading: true
            });
        case "RECEIVE_PROFILES":
            return Object.assign({}, state, {
                matches: action.matches,
                isLoading: false
            });
        default:
            return state;
    }
}
