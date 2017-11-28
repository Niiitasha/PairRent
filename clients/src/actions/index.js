import $ from 'jquery-ajax';

// trigger the process, make the request, and call the other two actions
export function fetchProfiles() {
    // when using async actions and thunk, instead of returning the action object,
    // we return a callback function. This has a `dispatch` parameter that we
    // can use to dispatch other actions whenever we want.
    return function(dispatch) {
        dispatch(requestProfiles());
        $.get("api/profiles", function(data) {
            dispatch(receiveProfiles(data));
        });
    }
}

// Allow the reducer to update the state when the request starts loading.
function requestProfiles() {
    return {
        type: "REQUEST_PROFILES"
    }
}

// Allow the reducer to update the state when the request finishes and brings back data.
function receiveProfiles(data) {
    return {
        type: "RECEIVE_PROFILES",
        data
    }
}
