import React from 'react';
// import React, { useEffect } from 'react';

import AppRouter from "./components/AppRouter";


// Styles
import './styles/nule_styles.css';
import './styles/imgs_limiter.css';
import './styles/Authentification.css';
// import './styles/UserList.styles';
// import '../styles/Homepage.styles';
// import '../styles/LogoutButton.styles';
// import '../styles/UserDetail.styles';


// Redux
// import { Provider } from 'react-redux';
// import store from './store';


const App: React.FC = () => {
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

    return (
        // <Provider store={store}>
            <AppRouter/>
        // </Provider>
    );
};

export default App;
