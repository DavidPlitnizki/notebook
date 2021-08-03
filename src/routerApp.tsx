import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListPage from './components/Pages/ListPage';
import MainPage from './components/Pages/MainPage';

const RouterApp: React.FC = () => {
    return (
        <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={MainPage} />
            <Route path={`${process.env.PUBLIC_URL}/list`} component={ListPage} />
        </Switch>
    )
}

export default RouterApp;