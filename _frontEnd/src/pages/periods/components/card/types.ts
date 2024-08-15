import { IPeriods } from "../../../../services/periods/types";


export interface ITableViewProps{
    data: IPeriods[];
    handleEdit: (id: string) => void;
    isLoading: boolean;
    isEnabled: boolean;
}