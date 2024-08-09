import { ChangeEvent, FormEvent } from "react";


export interface IFormLoginProps{
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}