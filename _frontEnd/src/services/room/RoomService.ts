import { IRoomService } from "./types";
import { Api } from "../../utils/api/ApiConfig";


const token = localStorage.getItem('token') || '';


const getAll = async (): Promise<IRoomService[]> => {

    try {

        const { data } = await Api.get('/room/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return data;

    } catch (error: any) {
       throw new Error(error.response.data.message);
    }

}

const create = async (room: Omit<IRoomService, 'idPeriod'>): Promise<IRoomService> => {

    try {

        const { data } = await Api.post<any>('/room/register', room, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })

        return data;

    } catch (error: any) {
        throw new Error(error.response.data.message);
    }


}

const getById = async (id: string): Promise<IRoomService> => {

    try {

        const { data } = await Api.get(`/room/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return data;

    } catch (error: any) {
        throw new Error(error.response.data.message);
    }


}

const update = async (room: IRoomService, id: string): Promise<void> => {

    try {

        const { data } = await Api.put(`/room/${id}`, room, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return data;

    } catch (error: any) {
        throw new Error(error.response.data.message);
    }


}

const deleteById = async (id: string): Promise<void> => {

    try {

        const { data } = await Api.delete(`/room/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return data;

    } catch (error: any) {
        throw new Error(error.response.data.message);
    }


}



export const RoomService = {
    getAll,
    getById,
    create,
    deleteById,
    update
}