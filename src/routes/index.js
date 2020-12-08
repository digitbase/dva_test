import React, { Fragment } from "react";

// 配置路由规则
import { Router, Route, NavLink, Switch, Redirect } from "dva/router";
import Home from "../components/Home.js";

const Test = () => <h1>test</h1>;

let fn = function ({ history, app }) {
  return (
    <Router history={history}>
      <Fragment>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/test" exact component={Test}></Route>
      </Fragment>
    </Router>
  );
};

export default fn;
