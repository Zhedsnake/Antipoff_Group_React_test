import React from "react";

import UserDetail from "../pages/UserDetail";
import UserList from "../pages/UserList";
import Auth from "../pages/Auth";

import {createBrowserRouter} from "react-router-dom";

//! Патом сделать переадрисацию с несуществующих url

export const privateRoutes = createBrowserRouter([
    {
        path: "/",
        element: (
            <UserList />
        ),
    },
    {
        path: "/user/:userId",
        element: (
            <UserDetail />
        ),
    },
]);

export const publicRoutes = createBrowserRouter([
    {
        path: "/auth",
        element: (
            <Auth />
        ),
    },
]);

