import {
    OneStuffAction,
    OneStuffActionTypes,
    OneStuffState,
} from "../../types/stuffsData/oneStuff";

const initialState: OneStuffState = {
    oneStaff: {
        id: 0,
        email: '',
        first_name: '',
        last_name: '',
        avatar: '',
    },
    loading: false,
    error: null,
};


export const oneStuffReducer = (state = initialState, action: OneStuffAction): OneStuffState => {
    switch (action.type) {
        case OneStuffActionTypes.GET_STUFF:
            return { ...state, loading: true };
        case OneStuffActionTypes.GET_STUFF_SUCCESS:
            return { ...state, loading: false, oneStaff: action.payload };
        case OneStuffActionTypes.GET_STUFF_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};


