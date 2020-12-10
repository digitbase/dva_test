import React, { Fragment } from "react";

// 配置路由规则
import { Router, Route, NavLink, Switch, Redirect } from "dva/router";
import Home from "../components/Home.js";
import Signin from "../components/Signin";
import TeacherList from "../components/TeacherList.js";
import TeacherEdit from "../components/TeacherEdit.js";

const MyRoute = Route;
const homeSubRouters = [
  { path: "/home/list", component: TeacherList },
  { path: "/home/edit", component: TeacherEdit },
];

let fn = function ({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/signin" exact component={Signin}></Route>
        <Redirect to="/signin" />
      </Switch>
    </Router>
  );
};

export default fn;
