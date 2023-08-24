type UserAction = SetUserAction | ResetUserAction;

type SetUserAction = {
    type: 'user.set';
    payload: User;
}

type ResetUserAction = {
    type: 'user.reset';
    payload: null;
}
