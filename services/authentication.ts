import {TUser} from '../store/types';
import {loginUrl} from './api';
import {postRequest} from './request';

export type TLoginRequestBody = {
  email: string;
  password: string;
};

export const authenticationService = {
  login: async (body: TLoginRequestBody): Promise<TUser> =>
    postRequest<TUser>(loginUrl, body),
};