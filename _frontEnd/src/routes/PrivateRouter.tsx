import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../contexts/auth/UserContext";


interface IPrivateProps {
    children: React.ReactNode;
}


export const PrivateRoute = ({ children }: IPrivateProps) => {
    const { authenticated } = useContext(userContext);

    return authenticated ? children : <Navigate to='/' />
}


