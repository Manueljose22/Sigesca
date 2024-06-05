import { ChangeEvent } from "react";



export interface ISelectProps{
    label: string;
    data?: [];
    value?: string;
    name: string;
    handleOnchange: (e: ChangeEvent<HTMLSelectElement>) => void;
}