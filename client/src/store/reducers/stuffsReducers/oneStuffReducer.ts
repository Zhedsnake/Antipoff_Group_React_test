import {
    OneStuffAction,
    OneStuffActionTypes,
    OneStuffState,
} from "../../../types/stuffsData/oneStuff";

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
            return {
                loading: true,
                error: null,
                oneStaff: {
                    id: 0,
                    email: '',
                    first_name: '',
                    last_name: '',
                    avatar: '',
                },
            };
        case OneStuffActionTypes.GET_STUFF_SUCCESS:
            return { loading: false, error: null, oneStaff: action.payload };
        case OneStuffActionTypes.GET_STUFF_ERROR:
            return { loading: false,
                error: action.payload,
                oneStaff: {
                    id: 0,
                    email: '',
                    first_name: '',
                    last_name: '',
                    avatar: '',
                },
            };
        case OneStuffActionTypes.DEF_ONE_STUFF:
            return { ...state, ...initialState };
        default:
            return state;
    }
};


