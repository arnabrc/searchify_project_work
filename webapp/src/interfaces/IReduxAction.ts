import { Action } from 'redux';

export interface IReduxAction<T> extends Action {
    type: string,
    response: T
};