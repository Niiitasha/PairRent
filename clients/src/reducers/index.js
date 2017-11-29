const INITIAL_STATE = {
    data: [],
    isLoading: true,
    matches: []
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
        default:
            return state;
    }
}

function matchLogic(state, searchData) {

var matchedProperties = 0;
var matches = [];

  state.data.forEach(function(item){
    for(var itemProperty in item){
      for(var searchProperty in searchData){
        if(itemProperty === searchProperty){
          if(item[itemProperty] === searchData[searchProperty]){
            matchedProperties++
          }
        }
      }
    }
    if(matchedProperties>=3){
      matches.push(item);
  }
  matchedProperties = 0;

  });

    return matches
}
