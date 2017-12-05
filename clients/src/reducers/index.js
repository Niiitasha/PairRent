const INITIAL_STATE = {
  currentCardIndex: 0,
  data: [],
  isLoading: true,
  matches: [],
  matchCount: 0
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "REQUEST_PROFILES":
      return Object.assign({}, state, {isLoading: true});
    case "RECEIVE_PROFILES":
      return Object.assign({}, state, {
        data: action.data,
        isLoading: false
      });
    case "MAKE_MATCHES":
      var madeMatches = matchLogic(state, action.searchData);
      return Object.assign({}, state, {matches: madeMatches});
    case "NEXT":
      return Object.assign({}, state, {
        currentCardIndex: state.currentCardIndex + 1
      });
    case "PREV":
      return Object.assign({}, state, {
        currentCardIndex: state.currentCardIndex - 1
      });
    default:
      return state;
  }
}

function matchLogic(state, searchData) {

  var matches = [];

  state.data.forEach(function(user) {
    var userPropertyMatches = 0;
    var specifiedMatches = 0;
    for (var searchProperty in searchData) {
      if (searchData[searchProperty] !== null) {
        specifiedMatches++
        if (user[searchProperty] === searchData[searchProperty]) {
          userPropertyMatches++;
        }
      }
    }
    if(userPropertyMatches>0){
      matches.push({user:user,percentage:userPropertyMatches%specifiedMatches});
    }

    if(matches.includes(user)){
                      matches.push(user);
                         }
                              state.matchCount = matches.length;		                        
  });


  return matches
}
