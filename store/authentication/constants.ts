export const ACTION_AUTHENTICATION_PREFIX = 'authentication.';

// Type
export const CHANGE_AUTHENTICATION_MODE_TYPE = `${ACTION_AUTHENTICATION_PREFIX}change_mode.type`;
export const LOGOUT_TYPE = `${ACTION_AUTHENTICATION_PREFIX}logout.type`;

/** Login */
// Type
export const LOGIN_FILLS_OUT_FORM_TYPE = `${ACTION_AUTHENTICATION_PREFIX}login.fills_out_form.type`;
export const LOGIN_ON_ERROR_TYPE = `${ACTION_AUTHENTICATION_PREFIX}login.on_error.type`;
export const LOGIN_ON_SUCCESS_TYPE = `${ACTION_AUTHENTICATION_PREFIX}login.on_success.type`;
// Keys
export const LOGIN_FILLS_OUT_EMAIL_KEY = 'email';
export const LOGIN_FILLS_OUT_PASSWORD_KEY = 'password';

/** Register */
// Type
export const REGISTER_FILLS_OUT_FORM_TYPE = `${ACTION_AUTHENTICATION_PREFIX}register.fills_out_form.type`;
export const REGISTER_ON_ERROR_TYPE = `${ACTION_AUTHENTICATION_PREFIX}register.on_error.type`;
export const REGISTER_ON_SUCCESS_TYPE = `${ACTION_AUTHENTICATION_PREFIX}register.on_success.type`;
// Keys
export const REGISTER_FILLS_OUT_NAME_KEY = 'name';
export const REGISTER_FILLS_OUT_EMAIL_KEY = 'email';
export const REGISTER_FILLS_OUT_PASSWORD_KEY = 'password';
export const REGISTER_FILLS_OUT_CONFIRM_PASSWORD_KEY = 'confirmPassword';
