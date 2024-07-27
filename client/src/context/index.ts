import {createContext, Dispatch, SetStateAction} from "react";
import {ToggleShowType} from "../types/AuthForm";

export interface AuthContextType {
    isAuth: boolean;
    setIsAuth: Dispatch<SetStateAction<boolean>>;
    isLoading: boolean;
    toggleShow: ToggleShowType;
    setToggleShow: Dispatch<SetStateAction<ToggleShowType>>;
    defToggleShow: ToggleShowType;
}


export const AuthContext = createContext<AuthContextType>();
