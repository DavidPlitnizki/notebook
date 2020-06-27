import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header';
import App from './components/App/App';
import ListPage from './components/Pages/ListPage';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const store = createStore(rootReducer, (applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/list" component={ListPage} />
            </Switch>
        </Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
