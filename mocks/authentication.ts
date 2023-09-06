/* eslint-disable @typescript-eslint/no-explicit-any */
import {Response, Request} from 'miragejs';
import {
  TLoginRequestBody,
  TRegisterRequestBody,
} from '../services/authentication';

const loginOK = () =>
  new Response(
    200,
    {},
    {
      id: '53dhsJSS8EHXdsfergtHD02dcp',
      name: 'Jérôme GUERIN',
      email: 'guerin_jerome@icloud.com',
      phone: '0600000000',
      password: 'motdepasse',
      birthDate: '1999-01-18',
      creationDate: '2023-08-31',
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

const registerOK = () =>
  new Response(
    200,
    {},
    {
      id: '53dhsJSS8EHXdsfergtHD02dcp',
      name: 'Jérôme GUERIN',
      email: 'guerin_jerome@icloud.com',
      phone: '0600000000',
      password: 'motdepasse',
      birthDate: '1999-01-18',
      creationDate: '2023-08-31',
    },
  );

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
