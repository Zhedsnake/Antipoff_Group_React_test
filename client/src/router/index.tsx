import React from "react";

// Pages
import UserDetail from "../pages/StaffId";
import UserLists from "../pages/Staffs";
import Auth from "../pages/Auth";
import AuthEam from "../pages/AuthEam";


const privateRoutes = [
    {path: '/', component: <UserLists />, exact: true},
    {path: '/stuff/:stuffId', component: <UserDetail />, exact: true},
]

const publicRoutes = [
    {path: '/auth', component: <Auth />, exact: true},
]

export {privateRoutes, publicRoutes};

