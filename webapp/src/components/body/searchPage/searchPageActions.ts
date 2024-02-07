import { searchAllApiRequest, userSearchApiRequest } from "../../../api/api";

export const SET_SEARCHIFY_DETAILS = 'SET_SEARCHIFY_DETAILS';
export const SET_LOADING = 'SET_LOADING';
export const SET_USER_SEARCH = 'SET_USER_SEARCH';

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

export const setUserSearch = (response: any) => {
    return {
        type: SET_USER_SEARCH,
        response
    }
}

export const searchAllSearchifyDetails = () => {
    return async (dispatch: Function, getState: Function) => {
        dispatch(setLoading(true));
        await searchAllApiRequest(
            '',
            (jsonData: any) => {
                dispatch(setSearchifyDetails(jsonData))
            },
            () => {
                dispatch(setLoading(false))
            }
        )
    };
};


export const getSearchifyDetail = (input: string) => {
    return async (dispatch: Function, getState: Function) => {
        dispatch(setLoading(true));
        await userSearchApiRequest(
            JSON.stringify({'name': input}),
            (jsonData: any) => {
                dispatch(setUserSearch(jsonData))
            },
            () => {
                dispatch(setLoading(false))
            }
        )
    };
};

export const getUserSearchResult = async () => {
    try {
        let res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
        let finalRes = await res.json();
        return finalRes;
    } catch (error) {
        return error;
    }
};