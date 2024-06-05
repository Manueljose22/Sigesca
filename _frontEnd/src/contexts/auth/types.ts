import { IUserLogin } from "../../hooks/auth/types";



export interface IUserCotext{
    authenticated: boolean;
    login: (user:IUserLogin) => void;
    logout: () => void;
}