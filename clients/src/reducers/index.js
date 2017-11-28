const INITIAL_STATE = {
    data: [],
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
                data: action.data,
                isLoading: false
            });
        default:
            return state;
    }
}
