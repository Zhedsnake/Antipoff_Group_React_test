import React, {useEffect, useState} from 'react';
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
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)

        const token: boolean = !!localStorage.getItem('token');

        setIsAuth(token);

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
