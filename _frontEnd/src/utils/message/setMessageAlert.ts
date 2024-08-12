import Swal from "sweetalert2";
import { ISetMessageProps } from "./types";


export const setMessageAlert = ({title=' ', msg, type}: ISetMessageProps) => {
    Swal.fire(title, msg, type);
}