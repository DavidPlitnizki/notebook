import React from "react";
import { Route, Switch } from "react-router-dom";

import ListPage from "components/Pages/ListPage";
import MainPage from "components/Pages/MainPage";
import NoMatch from "components/Pages/NoMatch";

const RouterApp: React.FC = () => {
  return (
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={MainPage} />
      <Route path={`${process.env.PUBLIC_URL}/list`} component={ListPage} />
      <Route path="*" component={NoMatch} />
    </Switch>
  );
};

export default RouterApp;
