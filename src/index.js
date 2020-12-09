import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import router from "./routes";
import moodelIndex from "./models";
import teacherModel from "./models/teacher";
import dva from "dva";
import createhistory from "history/createBrowserHistory";

import "./index.css";

// 1. Initialize
const app = dva({
  history: createhistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(moodelIndex);
app.model(teacherModel);

// 4. Router
app.router(router);

// 5. Start
app.start("#root");
