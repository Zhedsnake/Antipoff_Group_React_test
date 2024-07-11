import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// Rexus
import { Provider } from 'react-redux';
import store from './store';

// Pages
import Homepage from "./pages/App";
import Authentification from "./pages/Auth";

// Guards
import GuestGuard from './guards/GuestGuard';
import UserGuard from './guards/UserGuard';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Homepage />
    ),
  },
  {
    path: " ",
    element: (
      <Authentification />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);