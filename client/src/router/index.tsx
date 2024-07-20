
// Pages
import UserDetail from "../pages/UserDetail";
import UserList from "../pages/UserList";
import Auth from "../pages/Auth";


const privateRoutes = [
    {path: '/', component: <UserList />, exact: true},
    {path: '/user/:userId', component: <UserDetail />, exact: true},
]

const publicRoutes = [
    {path: '/auth', component: <Auth />, exact: true},
]

export {privateRoutes, publicRoutes};

