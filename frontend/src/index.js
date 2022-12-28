import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Hder from "./components/Headerr/Hder";
import { ContextProvider } from "./context/Context";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Hder/>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
