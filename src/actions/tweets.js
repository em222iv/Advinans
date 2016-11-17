const GET_TWEETS = 'GET_TWEETS';
//Outdated Twitter Client but does its job, creates warnings for webpack 
var Codebird = require("codebird");
var cb = new Codebird;
cb.setConsumerKey("eKFD5LfoS5QtxErmkrlsZZh8V", "vUxHpruo86O8p3pw2BAm3wmaLQbUHgErlnbL7aBVNKxyrAfK83");
cb.setToken("571260716-iFY53tlOvjZJ78ymKbaeDn6xYAHhVbMKrVjgblSE", "p5dCCIzq3H6czXOfsUALF3svyfY8jy2AflrlhtVrE9tSC");

export const getTweets = () => {
  return (dispatch) => {
      cb.__call(
          "search_tweets",
         {"q": "#haiku"},
          function (reply) {
            return dispatch(readTweetsSuccess(reply.statuses));
          },
          true
      );
  };
}

const readTweetsSuccess = (tweets) => {
  return {
    type: GET_TWEETS,
    tweets,
  };
};
