import {ACTION_APPFORMS_PREFIX} from '../constants';

export const ACTION_REGISTER_PREFIX = 'register.';
export const REGISTER_FILLS_OUT_PASSWORD_KEY = 'password';
export const REGISTER_FILLS_OUT_CONFIRM_PASSWORD_KEY = 'confirmPassword';
export const REGISTER_FILLS_OUT_EMAIL_KEY = 'email';
export const REGISTER_FILLS_OUT_NAME_KEY = 'name';
export const REGISTER_ON_SUCCESS_TYPE = `${ACTION_APPFORMS_PREFIX}${ACTION_REGISTER_PREFIX}on_success.type`;
export const REGISTER_ON_ERROR_TYPE = `${ACTION_APPFORMS_PREFIX}${ACTION_REGISTER_PREFIX}on_error.type`;
export const REGISTER_FILLS_OUT_FORM_TYPE = `${ACTION_APPFORMS_PREFIX}${ACTION_REGISTER_PREFIX}fills_out_form.type`;
