export type TLoginSetEmailAction = {
  type: 'appForms.login.type.set_email';
  payload: {
    key: 'email';
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

export type TLoginActions = TLoginSetEmailAction | TLoginSetPasswordAction;
