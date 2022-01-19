import {UserActionTypes} from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});
// the above is just a function that return objects, they will create the expectation contained within 'case' of reducers