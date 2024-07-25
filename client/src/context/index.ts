import { createContext } from "react";
import {AuthContextType, defaultAuthContext} from "../types/AuthContext";

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);
