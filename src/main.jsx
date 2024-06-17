import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TodoContextProvider } from "./store/TodoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TodoContextProvider>
);
