import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './components/App/App';
import ListPage from './components/Pages/ListPage';

const RouterApp: React.FC = () => {
    return (
        <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={App} />
            <Route path={`${process.env.PUBLIC_URL}/list`} component={ListPage} />
        </Switch>
    )
}

export default RouterApp;