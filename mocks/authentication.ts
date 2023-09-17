/* eslint-disable @typescript-eslint/no-explicit-any */
import {Response, Request} from 'miragejs';
import {
  TLoginRequestBody,
  TRegisterRequestBody,
} from '../services/authentication';
import {TAccount, TBudget, TExpense, TUser} from '../store/types';

const user: TUser = {
  id: '53dhsJSS8EHXdsfergtHD02dcp',
  name: 'Jérôme GUERIN',
  email: 'guerin_jerome@icloud.com',
  password: 'motdepasse',
  creationDate: '2023-08-31',
};

const accounts: TAccount[] = [
  {
    id: '53dhsJSS8EHXHD02dcp',
    name: 'Courant - perso',
    totalRemaining: 500,
    base: 1000,
  },
  {
    id: '9990sJSS8EHXHD02dcp',
    name: 'Épargne - perso',
    totalRemaining: 6250,
    base: 6250,
  },
  {
    id: '3268Kdsosioç9çHXHD02dcp',
    name: 'Épargne - commun',
    totalRemaining: 350,
    base: 350,
  },
];

const budgets: TBudget[] = [
  {
    id: '53dhsJSS8EHD02dcp',
    accountId: '53dhsJSS8EHXHD02dcp',
    name: 'Loyer',
    type: 'fixed',
    totalRemaining: 600,
    base: 600,
  },
  {
    id: '725dzz3dhsJSS8EHD0cp',
    accountId: '53dhsJSS8EHXHD02dcp',
    name: 'Loisirs',
    type: 'variable',
    totalRemaining: 0,
    base: 200,
  },
  {
    id: '920mmslckdke""S8EHD0cp',
    accountId: '53dhsJSS8EHXHD02dcp',
    name: 'Nourriture',
    type: 'variable',
    totalRemaining: 0,
    base: 300,
  },
  {
    id: '32ckdke""S8EHD0cp',
    accountId: '9990sJSS8EHXHD02dcp',
    name: 'Épargne',
    type: 'saved',
    totalRemaining: 6250,
    base: 6250,
  },
  {
    id: '7329jdkjsslS28EHD0cp',
    accountId: '3268Kdsosioç9çHXHD02dcp',
    name: 'Épargne voyage',
    type: 'saved',
    totalRemaining: 100,
    base: 100,
  },
  {
    id: '628Zekdnden9Zçskj',
    accountId: '3268Kdsosioç9çHXHD02dcp',
    name: 'Épargne sorties',
    type: 'saved',
    totalRemaining: 250,
    base: 250,
  },
];

const expenses: TExpense[] = [
  {
    id: '2426YdndjzeshJEHUz92',
    accountId: '53dhsJSS8EHXHD02dcp',
    budgetId: '725dzz3dhsJSS8EHD0cp',
    details: 'Cinéma',
    amount: 50,
    date: '2023-08-31:02:00',
  },
  {
    id: 'ddzxsk839KDjz7',
    accountId: '53dhsJSS8EHXHD02dcp',
    budgetId: '725dzz3dhsJSS8EHD0cp',
    details: 'Restaurant',
    amount: 100,
    date: '2023-08-30:00:00',
  },
  {
    id: '47282jndnsJJE90',
    accountId: '53dhsJSS8EHXHD02dcp',
    budgetId: '725dzz3dhsJSS8EHD0cp',
    details: 'Brocante',
    amount: 50,
    date: '2023-08-26:12:34',
  },
  {
    id: '7229EDdnfejskxjs',
    accountId: '53dhsJSS8EHXHD02dcp',
    budgetId: '920mmslckdke""S8EHD0cp',
    details: 'Course 1',
    amount: 200,
    date: '2023-08-26:12:34',
  },
  {
    id: 'dzedapzsl9320',
    accountId: '53dhsJSS8EHXHD02dcp',
    budgetId: '920mmslckdke""S8EHD0cp',
    details: 'Course 2',
    amount: 100,
    date: '2023-08-26:12:39',
  },
];

const loginOK = () =>
  new Response(
    200,
    {},
    {
      user,
      accounts,
      budgets,
      expenses,
    },
  );

const loginBadRequest = () => new Response(400, {}, {});

const loginInternalServerError = () => new Response(500, {}, {});

export const loginManagement = (_: any, request: Request) => {
  const {email} = JSON.parse(
    request.requestBody,
  ) as unknown as TLoginRequestBody;

  switch (email) {
    case 'badRequest':
      return loginBadRequest();
    case 'internalServerError':
      return loginInternalServerError();
    default:
      return loginOK();
  }
};

const registerOK = () => new Response(200, {}, user);

const registerBadRequest = () => new Response(400, {}, {});

const registerInternalServerError = () => new Response(500, {}, {});

export const registerManagement = (_: any, request: Request) => {
  const {name} = JSON.parse(
    request.requestBody,
  ) as unknown as TRegisterRequestBody;

  switch (name) {
    case 'badRequest':
      return registerBadRequest();
    case 'internalServerError':
      return registerInternalServerError();
    default:
      return registerOK();
  }
};
