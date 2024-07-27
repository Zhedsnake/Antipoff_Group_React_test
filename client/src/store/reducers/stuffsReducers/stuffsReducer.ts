import {StuffsAction, StuffsActionTypes, StuffsState} from "../../../types/stuffsData/stuffs";


const defaultGetStuffs: StuffsState = {
    data: {
        stuffs: [
            {
                id: 0,
                email: '',
                first_name: '',
                last_name: '',
                avatar: '',
            },
        ],
        total_pages: null,
    },
    loading: false,
    error: null,
};


export const stuffsReducer = (state = defaultGetStuffs, action: StuffsAction): StuffsState => {
    switch (action.type) {
        case StuffsActionTypes.GET_STUFFS:
            return { ...state, loading: true };
        case StuffsActionTypes.GET_STUFFS_SUCCESS:
            return { ...state, loading: false, data: { stuffs: action.payload.data, total_pages: action.payload.total_pages } };
        case StuffsActionTypes.GET_STUFFS_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};


