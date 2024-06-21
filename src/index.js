import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Provider } from "react-redux";
import { Globalstate } from "./context/context";
import { AuthProvider } from "./context/Authcontext.js";
import store from "./Redux/store.js";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <Globalstate>
          <App />
        </Globalstate>
      </AuthProvider>
    </Provider>
  </BrowserRouter>
);
