export type TLoginSetEmailOrUsernameAction = {
  type: 'appForms.login.type.set_email_or_username';
  payload: {
    key: 'emailOrUsername';
    value: string;
  };
};

export type TLoginSetPasswordAction = {
  type: 'appForms.login.type.set_password';
  payload: {
    key: 'password';
    value: string;
  };
};

export type TLoginActions =
  | TLoginSetEmailOrUsernameAction
  | TLoginSetPasswordAction;
