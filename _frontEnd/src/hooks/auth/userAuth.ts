import { Api } from "../../utils/api/ApiConfig"
import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { IUseAuth, IUserLogin } from "./types"
import { setMessageAlert } from "../../utils/message/setMessageAlert";




export const userAuth = () => {

    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();


    const setToken = useCallback(() => {

        const token = localStorage.getItem('token');

        if (token) {
            Api.defaults.headers.Authorization = `Bearer ${token}`;
        }

    }, []);

    useEffect(() => {
        setToken();
    }, [setToken])


    const login = async (user: IUserLogin) => {

        try {
            const data = await Api.post('/session', user).then(response => {

                return response.data;
            })

            useAuth(data);

        } catch (error: any) {
            setMessageAlert({ title: '', msg: error.response.data.message, type: 'error' });
        }
    }

    const useAuth = (data: IUseAuth) => {

        setAuthenticated(true);
        localStorage.setItem('token', data.token);

        navigate('/dashboard');
    }

    const logout = () => {

        setAuthenticated(false);
        localStorage.removeItem('token');
        Api.defaults.headers.Authorization = null;
    }


    return {
        authenticated,
        login,
        logout
    }
}