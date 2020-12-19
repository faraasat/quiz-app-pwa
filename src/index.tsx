import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { QuizDataContextProvider } from "./data/quiz-data.context";
import { initNotifications } from "./Services/firebase.service";

const loader = document.querySelector(".loader");
const showLoader = () => loader?.classList.remove("loader--hide");
const hideLoader = () => loader?.classList.add("loader--hide");

ReactDOM.render(
  <React.StrictMode>
    <QuizDataContextProvider>
      <App hideLoader={hideLoader} showLoader={showLoader} />
    </QuizDataContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

initNotifications();
serviceWorkerRegistration.register();
reportWebVitals();
