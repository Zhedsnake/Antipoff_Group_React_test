
// Pages
import UserDetail from "../pages/UserDetail";
import UserLists from "../pages/UserLists";
import Auth from "../pages/Auth";


const privateRoutes = [
    {path: '/', component: <UserLists />, exact: true},
    {path: '/user/:userId', component: <UserDetail />, exact: true},
]

const publicRoutes = [
    {path: '/auth', component: <Auth />, exact: true},
]

export {privateRoutes, publicRoutes};

