import $ from 'jquery-ajax';

export function fetchProfiles() {
    return function (dispatch) {
        dispatch(requestProfiles());
        $.get("/api/profiles", function (data) {
            dispatch(receiveProfiles(data));
        });
    };
}

function requestProfiles() {
    return {
        type: "REQUEST_PROFILES"
    };
}

function receiveProfiles(profiles) {
    return {
        type: "RECEIVE_PROFILES",
        profiles
    };
}
