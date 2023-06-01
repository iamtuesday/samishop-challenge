import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/globals.css";

import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./utilities/snackbar-manager.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SnackbarProvider>
      <BrowserRouter>
        <App />
        <SnackbarUtilsConfigurator />
      </BrowserRouter>
    </SnackbarProvider>
  </React.StrictMode>
);
