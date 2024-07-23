import React from "react";

// Pages
import UserDetail from "../pages/StaffDetail";
import UserLists from "../pages/Staff";
import Auth from "../pages/Auth";
import AuthEam from "../pages/AuthEam";


const privateRoutes = [
    {path: '/', component: <UserLists />, exact: true},
    {path: '/user/:userId', component: <UserDetail />, exact: true},
]

const publicRoutes = [
    {path: '/auth', component: <Auth />, exact: true},
]

export {privateRoutes, publicRoutes};

