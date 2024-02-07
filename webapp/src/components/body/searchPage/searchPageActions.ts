import { searchAllApiRequest } from "../../../api/api";

export const SET_SEARCHIFY_DETAILS = 'SET_SEARCHIFY_DETAILS';
export const SET_LOADING = 'SET_LOADING';

export const setSearchifyDetails = (response: any) => {
    return {
        type: SET_SEARCHIFY_DETAILS,
        response
    };
};

export const setLoading = (response: any) => {
    return {
        type: SET_LOADING,
        response
    };
};

export const searchAllSearchifyDetails = () => {
    return async (dispatch: Function, getState: Function) => {
        dispatch(setLoading(true));
        await searchAllApiRequest(
            '',
            (jsonData: any) => {
                console.group(`1 `, jsonData)
                dispatch(setSearchifyDetails(jsonData))
            },
            () => {
                dispatch(setLoading(false))
            }
        )
    };
};