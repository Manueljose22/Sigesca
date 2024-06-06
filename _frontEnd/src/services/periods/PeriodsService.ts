import { useState } from "react";
import { IPeriods } from "./types";
import { Api } from "../../utils/api/ApiConfig";
import { ApiException } from "../../utils/api/ApiException";





const getAll = async (): Promise<IPeriods[] | ApiException> => {
    
    const [token] = useState(localStorage.getItem('token') || '');

    try {

        const { data } = await Api.get('/periods/', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })

        return data;

    } catch (error: any) {
        return new ApiException(error.response.message);
    }


}

const create = async (periods: Omit<IPeriods, 'id'>): Promise<IPeriods | ApiException> => {

    const [token] = useState(localStorage.getItem('token') || '');

    try {

        const { data } = await Api.post<any>('/periods/register', periods, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })

        console.log('ser');
        return data;

    } catch (error: any) {
        return new ApiException(error.response.message);
    }


}

const getById = async (id: string): Promise<IPeriods | ApiException> => {

    const [token] = useState(localStorage.getItem('token') || '');

    try {

        const { data } = await Api.get(`/periods/${id}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })

        return data;

    } catch (error: any) {
        return new ApiException(error.response.message);
    }


}

const update = async (periods: IPeriods, id: string): Promise<void | ApiException> => {
 const [token] = useState(localStorage.getItem('token') || '');
    try {

        const { data } = await Api.put(`/periods/${id}`, periods, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })

        return data;

    } catch (error: any) {
        return new ApiException(error.response.message);
    }


}

const deleteById = async (id: string): Promise<void | ApiException> => {
    const [token] = useState(localStorage.getItem('token') || '');
    try {

        const { data } = await Api.delete(`/periods/${id}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })

        return data;

    } catch (error: any) {
        return new ApiException(error.response.message);
    }


}



export const PeriodsService = {
    getAll,
    getById,
    create,
    deleteById,
    update
}