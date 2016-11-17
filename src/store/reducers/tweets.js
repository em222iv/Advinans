const GET_TWEETS = 'GET_TWEETS';

const initialState = {
  tweets: []
};

const tweets = (state = initialState, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case GET_TWEETS:
          return action.tweets
        default:
          return state
    }
};

export default tweets;
