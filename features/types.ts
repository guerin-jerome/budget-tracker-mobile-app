import { Dispatch } from "react";
import { TUserAction } from "./authentication/store/types";

export type TUser = {
    id: string;
    name: string;
    email: string;
    phone: string
    password: string;
    birthDate: string;
    creationDate: string;
}

export type TAppState = {
    user: TUser | null;
}

export type TAppContext = {
    appState: TAppState;
    dispatch: Dispatch<TAction>;
}

export type TAction = TUserAction
