import { ChangeEvent, Dispatch, FormEvent } from "react";
import { ICreateRoom, IRoom, IUpdateRoom } from "../../../services/room/types";



export interface ICardRoomProps{
    data: IRoom[];
    handleDelete: (id: string) => void;
    isLoading: boolean;
    setOnChange: Dispatch<React.SetStateAction<IUpdateRoom>>;
    setOpenModal: boolean 
    Roomvalue: IUpdateRoom;
    submitEdit: (e: FormEvent<HTMLFormElement>) => void
}


export interface IEditProps{
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    roomValue: IUpdateRoom;
    setRoom: Dispatch<React.SetStateAction<IRoom>>;
}


export interface ICreateRoomProps{
    setCreateData: Dispatch<React.SetStateAction<ICreateRoom[]>>;
    createRoomValue: ICreateRoom[];
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
}