import { USER_ACTION_TYPE_PREFIX } from "./user/constants";
import { userReducer } from "./user/reducer";

export const reducer = (state: AppState, action: Action) => {
    const { type } = action;

    if (type.includes(USER_ACTION_TYPE_PREFIX)) {
        return userReducer(state, action);
    }

    throw new Error('Unknown reducer');
};
