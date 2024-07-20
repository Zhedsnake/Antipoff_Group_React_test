import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

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
                <BrowserRouter>
                    <Routes>
                        {privateRoutes.map(route =>
                            <Route
                                element={route.component}
                                path={route.path}
                                // exact={route.exact}
                                key={route.path}
                            />
                        )}
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </BrowserRouter>
                :
                <BrowserRouter>
                    <Routes>
                        {publicRoutes.map(route =>
                            <Route
                                element={route.component}
                                path={route.path}
                                // exact={route.exact}
                                key={route.path}
                            />
                        )}
                        <Route path="*" element={<Navigate to="/auth" replace />} />
                    </Routes>
                </BrowserRouter>
    );
};

export default AppRouter;