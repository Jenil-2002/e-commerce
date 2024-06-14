import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App.js";
import "./index.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from "react-router-dom";
import { Globalstate } from "./context/context";
import { AuthProvider } from "./context/Authcontext.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AuthProvider>
            <Globalstate>
                <App />
            </Globalstate>
        </AuthProvider>
    </BrowserRouter>
);
