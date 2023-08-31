import {TAppState} from '../types';

export const getUser = (state: TAppState) => state.user || {};
