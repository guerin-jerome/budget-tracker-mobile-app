import {TAccount, TBudget, TExpense, TUser} from '../store/types';
import {loginUrl, registerUrl} from './api';
import {postRequest} from './request';

export type TLoginRequestBody = {
  email: string;
  password: string;
};

export type TRegisterRequestBody = {
  name: string;
  email: string;
  password: string;
};

export type TLoginResponse = {
  user: TUser;
  accounts: TAccount[];
  budgets: TBudget[];
  expenses: TExpense[];
};

export const authenticationService = {
  login: async (body: TLoginRequestBody): Promise<TLoginResponse> =>
    postRequest<TUser>(loginUrl, body),
  register: async (body: TRegisterRequestBody): Promise<TUser> =>
    postRequest<TUser>(registerUrl, body),
};
