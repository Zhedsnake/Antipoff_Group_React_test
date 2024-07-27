import {StuffData} from "./stuffData";

export interface OneStuffState {
    oneStaff: StuffData;
    loading: boolean;
    error: string | null;
}
export enum OneStuffActionTypes {
    GET_STUFF = 'GET_STUFF',
    GET_STUFF_SUCCESS = 'GET_STUFF_SUCCESS',
    GET_STUFF_ERROR = 'GET_STUFF_ERROR',
}
interface GetOneStuffAction {
    type: OneStuffActionTypes.GET_STUFF;
}
interface GetOneStuffSuccessAction {
    type: OneStuffActionTypes.GET_STUFF_SUCCESS;
    payload: StuffData
}
interface GetOneStuffErrorAction {
    type: OneStuffActionTypes.GET_STUFF_ERROR;
    payload: string;
}
export type OneStuffAction = GetOneStuffAction | GetOneStuffSuccessAction | GetOneStuffErrorAction
