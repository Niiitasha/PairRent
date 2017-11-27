import $ from 'jquery-ajax';

export function fetchMatches() {
    return function (dispatch) {
        dispatch(requestMatches());
        $.get("/api/matches", function (data) {
            dispatch(receiveMatches(data));
        });
    }
}

export function fetchProfiles() {
    return function (dispatch) {
        dispatch(requestProfiles());
        $.get("/api/profiles", function (data) {
            dispatch(receiveProfiles(data));
        });
    }
}

function requestProfiles() {
    return {
        type: "REQUEST_PROFILES"
    }
}

function receiveProfiles(profiles) {
    return {
        type: "RECEIVE_PROFILES",
        profiles
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
