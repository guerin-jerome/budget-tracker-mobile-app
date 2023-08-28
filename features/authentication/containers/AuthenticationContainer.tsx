import React, {useMemo} from 'react';
import {Authentication} from '../components/Authentication';
import {TAuthenticationContainer} from '../components/types';

export const AuthenticationContainer = ({type}: TAuthenticationContainer) => {
  const isLoginMode = useMemo(() => type === 'login', [type]);
  const informations = {
    buttonText: isLoginMode ? 'Connexion' : 'Inscription',
    linkText: isLoginMode ? "s'inscrire" : 'se connecter',
    type,
  };

  return <Authentication {...informations} />;
};
