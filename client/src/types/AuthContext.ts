import { Dispatch, SetStateAction } from "react";
import {ToggleShowType} from "./AuthForm";


export interface AuthContextType {
    isAuth: boolean;
    setIsAuth: Dispatch<SetStateAction<boolean>>;
    isLoading: boolean;
    toggleShow: ToggleShowType;
    setToggleShow: Dispatch<SetStateAction<ToggleShowType>>;
    defToggleShow: ToggleShowType;
}
