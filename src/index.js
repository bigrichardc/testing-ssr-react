import React from "react";
import ReactDOM from "react-dom";

// export App components
import { App } from "./component/app.component";

// compile App component in `#app` HTML element
ReactDOM.render(<App name="SSR Experiments" />, document.getElementById("app"));
