import StaffsDataService from "../api/StaffsDataService";
import {IStaff, IStaffsResponse} from "../types/stuffs";



const defaultGetStuffs = {
      data: [null],
      total_pages: null,
};

const GET_STUFFS = "GET_STUFFS";
// const REGISTRATION = "REGISTRATION";

export const getStuffsReducer = (state = defaultGetStuffs, action) => {
  switch (action.type) {
    case GET_STUFFS:
      return { ...state, data: action.payload.data, total_pages: action.payload.total_pages };
    // case REGISTRATION:
    //   return { ...state, id: action.payload.id, email: action.payload.email, avatar: action.payload.avatar, first_name: action.payload.first_name, last_name: action.payload.last_name };
    default:
      return state;
  }
};

export const getStuffsAction = (page) => async (dispatch) => {
  const response = await StaffsDataService.getStaffsByPagination (page);
  dispatch({ type: GET_STUFFS, payload: response });
};


// export const getStuffAction = (email, password) => async (dispatch) => {
//   const response = await AuthService.registerRequest(email, password);
//   dispatch({ type: REGISTRATION, payload: response.data.token });
// };
