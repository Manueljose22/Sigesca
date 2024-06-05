import { ChangeEvent } from "react";



export interface IInputProps{
    maxLength?: number;
    label: string;
    type: string;
    placeholder?: string;
    handleOnChenge: (e: ChangeEvent<HTMLInputElement>) => void;
    name: string;
    value?: string;
}