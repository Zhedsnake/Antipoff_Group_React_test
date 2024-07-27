import StaffsDataService from "../../api/StaffsDataService";
import {Dispatch} from "react";
import {StuffsAction, StuffsActionTypes} from "../../types/stuffsData/stuffs";

export const getStuffsAction = (page: number) => {
    return async (dispatch: Dispatch<StuffsAction>) => {
        try {
            dispatch({type: StuffsActionTypes.GET_STUFFS})
            const response = await StaffsDataService.getStaffsByPagination (page);
            dispatch({type: StuffsActionTypes.GET_STUFFS_SUCCESS, payload: response})
        } catch (e) {
            if (e instanceof Error) {
                console.log(e.message);
            }
            dispatch({
                type: StuffsActionTypes.GET_STUFFS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}