import React, {useEffect, useState} from 'react';
// import React, { useEffect } from 'react';

import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";


// Styles
import './styles/nule_styles.css';
import './styles/Imgs_limiter.css';
import './styles/Authentification.css';
import './styles/UserList.css';
import './styles/UserDetail.css';

// Redux
// import { Provider } from 'react-redux';
// import store from './store';


const App: React.FC = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    // const dispatch = useAppDispatch();

    // Проверка состояния аутентификации
    //! Патом добавить состояния в redux
    // useEffect(() => {
    //     const token = localStorage.getItem('auth');
    //
    //         if (token) {
    //             //!Наверное патом нужно будет это переделать
    //             dispatch({ type: 'auth/logIn/fulfilled', payload: { token } });
    //             // Ставит состояние аутенсификации на да
    //             setIsAuth(true);
    //         }
    //     // Отключает состояние загрузки
    //     setLoading(false);
    // }, [])
    
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setLoading(false);
    }, [])

    return (
        // <Provider store={store}>
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <AppRouter/>
        </AuthContext.Provider>
        // </Provider>
    );
};

export default App;
