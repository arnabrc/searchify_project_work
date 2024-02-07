import { combineReducers } from 'redux';
import searchifyDetailsReducer from '../body/searchPage/searchPageReducers';

const rootReducer = combineReducers({
    searchifyDetailsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;