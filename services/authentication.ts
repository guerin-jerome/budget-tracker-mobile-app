import {TUser} from '../store/types';
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

export const authenticationService = {
  login: async (body: TLoginRequestBody): Promise<TUser> =>
    postRequest<TUser>(loginUrl, body),
  register: async (body: TRegisterRequestBody): Promise<TUser> =>
    postRequest<TUser>(registerUrl, body),
};
