import React, {
  Context,
  PropsWithChildren,
  createContext,
  useMemo,
  useReducer,
} from 'react';
import {TAppContext, TAppState} from './types';
import {appReducer} from './reducers';

const initialState: TAppState = {appForms: {}};

export const AppContext: Context<TAppContext> = createContext<TAppContext>({
  appState: initialState,
  dispatch: () => null,
});

export const AppStore = ({children}: PropsWithChildren) => {
  const [appState, dispatch] = useReducer(appReducer, initialState);

  const appContextValue = useMemo(
    () => ({appState, dispatch}),
    [appState, dispatch],
  );

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};
