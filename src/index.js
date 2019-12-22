import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TermApp from "./Components/TermApp/TermApp";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<TermApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
