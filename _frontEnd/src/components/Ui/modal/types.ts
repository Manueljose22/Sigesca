import React, { Dispatch, ReactNode } from "react";

export interface IModalProps{
    isOpen: boolean;
    setOpen: Dispatch<React.SetStateAction<boolean>> 
    children?: ReactNode;
    whidth?: string
}