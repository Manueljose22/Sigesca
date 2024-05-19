export interface buttonProps{
    url: string;
    textButton: string;
    icon: React.ReactNode;
    colorScheme: string;
}

export interface submitProps{
    textButton: string;
    type: 'submit' | undefined;
}