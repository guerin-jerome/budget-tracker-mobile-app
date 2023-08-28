import React from 'react';
import {Box, Button, FormControl, Heading, Input} from 'native-base';

export const Login = () => (
  <Box alignItems="left" marginX="7%">
    <Heading>Bienvenu(e) dans Budget Tracker !</Heading>
    <FormControl>
      <FormControl.Label>Nom d&apos;utilisateur / Email</FormControl.Label>
      <Input />
    </FormControl>
    <FormControl>
      <FormControl.Label alignItems="center">
        Mot de passe
        <Button variant="link" marginLeft="10px" padding="0">
          Oublié ?
        </Button>
      </FormControl.Label>
      <Input />
    </FormControl>
    <Button width="100%">Connexion</Button>
    <Button variant="link" padding="0">
      Ou s&apos;inscrire
    </Button>
  </Box>
);
