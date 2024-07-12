import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// CSS
import "./css/index.css";
import "./css/App.css";
import "./css/Authentification.css";

// Rexus
import { Provider } from 'react-redux';
import store from './store';

// Pages
import Homepage from "./pages/App";
import Authentification from "./pages/Authentification";

// Guards
import GuestGuard from './components/guards/GuestGuard';
import UserGuard from './components/guards/UserGuard';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Homepage />
    ),
  },
  {
    path: "/authentification",
    element: (
      <UserGuard>
        <Authentification />
      </UserGuard>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GuestGuard>
        <RouterProvider router={router} />
      </GuestGuard>
    </Provider>
  </React.StrictMode>
);