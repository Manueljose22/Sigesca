import { ChangeEvent } from "react";


export interface IInputProps{
    type: string;
    name: string;
    value?: string;
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    textLabel: string;
    placeholder?: string;
    icon?: React.ReactNode;
    required?: boolean;
    maxLength?: number;

}