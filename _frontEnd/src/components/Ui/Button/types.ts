import React from "react";

export interface buttonProps{
    url: string;
    textButton: string;
    icon?: React.ReactNode;
    colorScheme: string;
    textColor: string | '';
    iconRight?: React.ReactNode;
}

export interface submitProps{
    textButton: string;
    type: 'submit' | undefined;
}