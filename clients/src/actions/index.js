import $ from 'jquery-ajax';

export function fetchProfiles() {
    return function (dispatch) {
        dispatch(requestProfiles());
        $.get("api/profiles", function (data) {
            dispatch(receiveProfiles(data));
        });
    }
}

export function makeMatches(searchData) {
    return {
        type: "MAKE_MATCHES",
        searchData
    }
}

function requestProfiles() {
    return {
        type: "REQUEST_PROFILES"
    }
}

function receiveProfiles(data) {
    return {
        type: "RECEIVE_PROFILES",
        data
    }
}
