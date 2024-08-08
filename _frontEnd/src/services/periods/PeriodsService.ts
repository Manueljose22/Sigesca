import { IPeriods } from "./types";
import { Api } from "../../utils/api/ApiConfig";


const token = localStorage.getItem('token') || '';


const getAll = async (): Promise<IPeriods[] | Error> => {

    try {

        const { data } = await Api.get('/periods/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return data;

    } catch (error: any) {
       throw new Error(error.response.data.message);
    }

}

const create = async (periods: Omit<IPeriods, 'idPeriod'>): Promise<IPeriods | Error> => {

    try {

        const { data } = await Api.post<any>('/periods/register', periods, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })

        return data;

    } catch (error: any) {
        throw new Error(error.response.data.message);
    }


}

const getById = async (id: string): Promise<IPeriods | Error> => {

    try {

        const { data } = await Api.get(`/periods/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return data;

    } catch (error: any) {
        throw new Error(error.response.data.message);
    }


}

const update = async (periods: IPeriods, id: string): Promise<void | Error> => {

    try {

        const { data } = await Api.put(`/periods/${id}`, periods, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return data;

    } catch (error: any) {
        throw new Error(error.response.data.message);
    }


}

const deleteById = async (id: string): Promise<void | Error> => {

    try {

        const { data } = await Api.delete(`/periods/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return data;

    } catch (error: any) {
        throw new Error(error.response.data.message);
    }


}



export const PeriodsService = {
    getAll,
    getById,
    create,
    deleteById,
    update
}