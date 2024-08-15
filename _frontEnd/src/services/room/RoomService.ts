import { ICreateRoom, IRoom, IUpdateRoom } from "./types";
import { Api } from "../../utils/api/ApiConfig";


const token = localStorage.getItem('token') || '';


const getAll = async (): Promise<IRoom[]> => {

    try {

        const { data } = await Api.get<IRoom[]>('/room/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return data;

    } catch (error: any) {
        throw new Error(error.response.data.message);
    }

}

const create = async (room: ICreateRoom[]): Promise<ICreateRoom> => {

    try {

        const { data } = await Api.post<ICreateRoom>('/room/register', room, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })

        return data;

    } catch (error: any) {
        throw new Error(error.response.data.message);
    }


}

const getById = async (id?: string): Promise<IRoom> => {

    try {

        const { data } = await Api.get<IRoom>(`/room/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return data;

    } catch (error: any) {
        throw new Error(error.response.data.message);
    }


}

const update = async (room: IUpdateRoom, id?: string): Promise<IUpdateRoom> => {

    try {

        const { data } = await Api.put<IUpdateRoom>(`/room/${id}`, room, {
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