import {ChangeEvent} from 'react'

export interface inputProps{
    type: string;
    name: string;
    value?: string;
    id?: string;
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    textLabel: string;
    placeholder?: string;
    icon?: React.ReactNode;
}