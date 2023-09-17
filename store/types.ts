import {Dispatch} from 'react';
import {TAuthenticationActions} from './authentication/types';

type TBudgetType = 'saved' | 'variable' | 'fixed';

export type TUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  creationDate: string;
};

export type TAccount = {
  id: string;
  name: string;
  totalRemaining: number;
  base: number;
};

export type TBudget = {
  id: string;
  accountId: string;
  name: string;
  type: TBudgetType;
  totalRemaining: number;
  base: number;
};

export type TExpense = {
  id: string;
  accountId: string;
  budgetId: string;
  details: string;
  amount: number;
  date: string;
};

export type TErrorForm = {
  message: string;
};

export type TAuthenticationMode = 'login' | 'register';

type TLoginForm = {
  email?: string;
  password?: string;
  error?: TErrorForm;
  isSucceed?: boolean;
};

type TRegisterForm = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  error?: TErrorForm;
  isSucceed?: boolean;
};

type TAppForms = {
  login?: TLoginForm;
  register?: TRegisterForm;
  authenticationMode: TAuthenticationMode;
};

export type TAppActions = TAuthenticationActions;

export type TAppState = {
  appForms: TAppForms;
  user?: TUser;
  accounts?: TAccount[];
  budgets?: TBudget[];
  expenses?: TExpense[];
};

export type TAppContext = {
  appState: TAppState;
  dispatch: Dispatch<TAppActions>;
};
