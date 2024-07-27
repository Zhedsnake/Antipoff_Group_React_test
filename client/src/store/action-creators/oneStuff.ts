import StaffsDataService from "../../api/StaffsDataService";
import {OneStuffAction, OneStuffActionTypes} from "../../types/stuffsData/oneStuff";
import {Dispatch} from "react";

export const getOneStuffAction = (stuffId: string) => {
    return async (dispatch: Dispatch<OneStuffAction>) => {
        try {
            dispatch({type: OneStuffActionTypes.GET_STUFF})
            const response = await StaffsDataService.getStaffById (stuffId);
            dispatch({type: OneStuffActionTypes.GET_STUFF_SUCCESS, payload: response.data})
        } catch (e) {
            if (e instanceof Error) {
                console.log(e.message);
            }
            dispatch({
                type: OneStuffActionTypes.GET_STUFF_ERROR,
                payload: 'Произошла ошибка при загрузке пользователя'
            })
        }
    }
}