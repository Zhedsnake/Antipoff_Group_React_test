import {StuffData} from "./stuffData";

export interface StuffsState {
    data: {
        stuffs: StuffData[];
        total_pages: number | null
    };
    loading: boolean;
    error: string | null;
}

export enum StuffsActionTypes {
    GET_STUFFS = 'GET_STUFFS',
    GET_STUFFS_SUCCESS = 'GET_STUFFS_SUCCESS',
    GET_STUFFS_ERROR = 'GET_STUFFS_ERROR',
}
interface GetStuffsAction {
    type: StuffsActionTypes.GET_STUFFS;
}
interface GetStuffsSuccessAction {
    type: StuffsActionTypes.GET_STUFFS_SUCCESS;
    payload: {
        data: StuffData[];
        total_pages: number | null;
    };
}
interface GetStuffsErrorAction {
    type: StuffsActionTypes.GET_STUFFS_ERROR;
    payload: string;
}
export type StuffsAction = GetStuffsAction | GetStuffsSuccessAction | GetStuffsErrorAction
