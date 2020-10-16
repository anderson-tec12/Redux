import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';

//provider
import { Provider} from 'react-redux'

//createStore cria p store, applyMiddleware aplica o middlware neste caso vamos usar o redux-thunks
import {createStore, applyMiddleware} from 'redux'

// multiplos dispatch
import multi from 'redux-multi'

//thunk
import thunk from 'redux-thunk'


// Reducers
import mainReducer from './store'

// criadno  a store, aplicando o midlleware 
const store =  applyMiddleware(thunk,multi)(createStore)(mainReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
