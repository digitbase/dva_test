import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import router from "./routes";
import moodelIndex from "./models";

import dva from "dva";
import createhistory from "history/createBrowserHistory";
// 1. Initialize
const app = dva({
  history: createhistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(moodelIndex);

// 4. Router
app.router(router);

// 5. Start
app.start("#root");
