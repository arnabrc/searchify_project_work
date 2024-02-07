import { IReduxAction } from '../../../interfaces/IReduxAction';
import { SET_LOADING, SET_SEARCHIFY_DETAILS } from './searchPageActions';

export interface ISearchifyDetailsReducerState {
    titles: string[];
    loading: boolean;
}

const searchifyDetailsReducer = (
    state: ISearchifyDetailsReducerState = {
        titles: [],
        loading: false
    },
    action: IReduxAction<any>
): ISearchifyDetailsReducerState => {
    switch (action.type) {
        case SET_SEARCHIFY_DETAILS:
            return {
                ...state,
                titles: action.response
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.response
            };
        default:
            return state;
    }
};

export default searchifyDetailsReducer;