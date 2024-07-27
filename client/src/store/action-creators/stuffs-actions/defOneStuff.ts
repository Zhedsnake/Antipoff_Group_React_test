import {Dispatch} from "react";
import {OneStuffAction, OneStuffActionTypes} from "../../../types/stuffsData/oneStuff";


export const defOneStuff = () => {
    return async (dispatch: Dispatch<OneStuffAction>) => {
        dispatch({type: OneStuffActionTypes.DEF_ONE_STUFF})
    }
}