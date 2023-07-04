import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/authContext";
import { MessageContextProvider } from "./context/messageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <MessageContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MessageContextProvider>
  </AuthContextProvider>
);
