import { useState } from "react";
import { IPeriods } from "../../pages/periods/components/cards/types";
import { Api } from "../../utils/api/ApiConfig";
import { ApiException } from "../../utils/api/ApiException";


const [token] = useState(localStorage.getItem('token') || '');




const getAll = async (): Promise<IPeriods[] | ApiException> => {

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

    try {

        const { data } = await Api.post('/periods/register', periods, {
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
    create
}