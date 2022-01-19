// these are just functions that return objects, they will create the expectation contained within 'case' of reducers
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});

