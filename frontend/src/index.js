import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QuizdataContextProvider } from "./context/QuizdataContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* Wrap whole app to create React Context: */}
        <AuthContextProvider>
            <QuizdataContextProvider>
                <App />
            </QuizdataContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
);
