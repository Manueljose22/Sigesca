import { ChangeEvent, FormEvent } from "react";


export interface cardProps{
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
   
}