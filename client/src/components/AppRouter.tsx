import React from 'react';
import {RouterProvider} from "react-router-dom";

// router
import {privateRoutes, publicRoutes} from "../router";

//! Патом добавить загрузку, когда добавлю redux
// import Loader from "./UI/Loader/Loader";



const AppRouter = () => {

    //! Патом сделать экспорт состояний из redux
    const isAuth:boolean = true;
    console.log(`Auth is ${isAuth}`)

    // if (isLoading) {
    //     return <Loader/>
    // }

    return (
        isAuth
            ?
                <RouterProvider router={privateRoutes} />
            :
                <RouterProvider router={publicRoutes} />
    );
};

export default AppRouter;