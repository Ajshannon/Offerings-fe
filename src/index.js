// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';

// CSS
import './index.css';

// Components
import App from './App.js';

// Redux
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/reducers';
import thunk from 'redux-thunk';

// ServiceWorker
import * as serviceWorker from './serviceWorker';

// React-Cookie
import { CookiesProvider } from 'react-cookie';

// Theme
import Themed from './theme';

// Redux-Form
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    reducer: reducer,
    form: formReducer
})

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhances(
    applyMiddleware(thunk)
));



const app = (
    <CookiesProvider>
        <BrowserRouter>
            <Provider store={ store }>
                <Themed>
                    <App />
                </Themed>
            </Provider>
        </BrowserRouter>
    </CookiesProvider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
