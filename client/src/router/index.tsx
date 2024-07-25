import React from "react";
import UserDetail from "../pages/StaffId";
import UserLists from "../pages/Staffs";
import Auth from "../pages/Auth";
import {RoutesTypes} from "../types/router";


const privateRoutes: RoutesTypes[] = [
    {path: '/', component: <UserLists />},
    {path: '/stuff/:stuffId', component: <UserDetail />},
]

const publicRoutes: RoutesTypes[] = [
    {path: '/auth', component: <Auth />},
]

export {privateRoutes, publicRoutes};

