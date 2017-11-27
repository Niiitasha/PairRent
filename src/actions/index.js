import $ from 'jquery-ajax';

export function fetchMatches() {
    return function (dispatch) {
        dispatch(requestMatches());
        $.get("/api/matches", function (data) {
            dispatch(receiveMatches(data));
        });
    }
}

function requestMatches() {
    return {
        type: "REQUEST_MATCHES"
    }
}

function receiveMatches(matches) {
    return {
        type: "RECEIVE_MATCHES",
        matches
    }
}