const INITIAL_STATE = {
    data: [],
    isLoading: true,
    matches: [],
    currentCardIndex: 0
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
        case "MAKE_MATCHES":
            var madeMatches = matchLogic(state, action.searchData);
            return Object.assign({}, state, {
                matches: madeMatches
            });
        case "NEXT":
            return Object.assign({}, state, {
                currentCardIndex: state.currentCardIndex + 1,
            });

        case "PREV":
            return Object.assign({}, state, {
                currentCardIndex: state.currentCardIndex - 1,
            });
        default:
            return state;
    }
}

function matchLogic(state, searchData) {

    var numMatches = 0;
    var matches = [];

    state.data.forEach(function (item) {
        for (var itemProperty in item) {
            for (var searchProperty in searchData) {
                if (itemProperty === searchProperty) {
                    if (item[itemProperty] === searchData[searchProperty]) {
                        searchData.matchedProperties.push(item[itemProperty]);
                        matches.push(item);
                    }
                }
            }
        }
    });
    return matches
}
