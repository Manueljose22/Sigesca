import { ChangeEvent, FormEvent} from "react";


export interface IFormPeriodsProps{
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void
}