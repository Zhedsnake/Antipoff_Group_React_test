import StaffsDataService from "../api/StaffsDataService";
import {IStaff, IStaffsResponse} from "../types/stuffs";



const defaultGetStuffs = {
    stuffsData: [null],
    total_pages: null,
    staffData: null
};

const GET_STUFFS = "GET_STUFFS";
const GET_STUFF = "GET_STUFF";

export const getStuffsReducer = (state = defaultGetStuffs, action) => {
  switch (action.type) {
    case GET_STUFFS:
      return { ...state, stuffsData: action.payload.data, total_pages: action.payload.total_pages };
      case GET_STUFF:
      return { ...state, staffData: action.payload.data };
    default:
      return state;
  }
};

export const getStuffsAction = (page) => async (dispatch) => {
  const response = await StaffsDataService.getStaffsByPagination (page);
  dispatch({ type: GET_STUFFS, payload: response });
};

export const getStuffAction = (stuffId) => async (dispatch) => {
    const response = await StaffsDataService.getStaffById (stuffId);
    dispatch({ type: GET_STUFF, payload: response });
};
