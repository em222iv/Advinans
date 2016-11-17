import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { Router, IndexRoute, Route } from 'react-router';

import Tweets from './components/tweets';

ReactDOM.render(
    <Provider store={store}>
      <Tweets />
    </Provider>,
    document.getElementById('app')
);
