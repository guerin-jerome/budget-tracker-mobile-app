import { USER_ACTION_TYPES } from "./constants";

export const userReducer = (state: AppState, action: Action) => {
    const { type, payload } = action;
    switch(type) {
        case USER_ACTION_TYPES.set:
            return {
                ...state,
                user: payload
            };
        case USER_ACTION_TYPES.reset:
            return {
                ...state,
                user: null
            };
        default:
            throw new Error(`Unknown action type: ${type}`);
    };
};