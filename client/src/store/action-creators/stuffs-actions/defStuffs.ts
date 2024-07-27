import {Dispatch} from "react";
import {StuffsAction, StuffsActionTypes} from "../../../types/stuffsData/stuffs";


export const defStuffs = () => {
    return async (dispatch: Dispatch<StuffsAction>) => {
        dispatch({type: StuffsActionTypes.DEF_STUFFS})
    }
}