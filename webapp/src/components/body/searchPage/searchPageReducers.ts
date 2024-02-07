import { IReduxAction } from '../../../interfaces/IReduxAction';
import { ISearchifyDetail } from '../../../interfaces/ISearchifyDetail';
import { SET_LOADING, SET_SEARCHIFY_DETAILS, SET_USER_SEARCH } from './searchPageActions';

export interface ISearchifyDetailsReducerState {
    items: ISearchifyDetail[];
    loading: boolean;
    userSearch: ISearchifyDetail;
}

const searchifyDetailsReducer = (
    state: ISearchifyDetailsReducerState = {
        items: [],
        loading: false,
        userSearch: null
    },
    action: IReduxAction<any>
): ISearchifyDetailsReducerState => {
    switch (action.type) {
        case SET_SEARCHIFY_DETAILS:
            return {
                ...state,
                items: action.response
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.response
            };
        case SET_USER_SEARCH:
            return {
                ...state,
                userSearch  : action.response
            };
        default:
            return state;
    }
};

export default searchifyDetailsReducer;