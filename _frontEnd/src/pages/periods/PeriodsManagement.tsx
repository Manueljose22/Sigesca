import { Container } from "../../components/containers/Container";
import { TableView } from "./components/table/TableView";
import { PeriodsForm } from "./components/form/PeriodsForm";
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import { IPeriods } from "../../services/periods/types";
import { PeriodsService } from "../../services/periods/PeriodsService";
import { setMessageAlert } from "../../utils/message/setMessageAlert";



function PeriodsManagement() {
    const [periods, setPeriods] = useState<IPeriods>({} as IPeriods);
    const [status, setStatus] = useState<string>('');
    const [data, setData] = useState<IPeriods[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [isEnabled, setEnabled] = useState<boolean>(true);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPeriods({ ...periods, [e.target.name]: e.target.value });
    }

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setStatus(e.target.options[e.target.selectedIndex].text);
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data: IPeriods = {
            idPeriod: '',
            year: periods.year,
            dateStart: periods.dateStart,
            dateEnd: periods.dateEnd,
            status: status
        }

        try {
            const result = await PeriodsService.create(data);
        } catch (error: any) {
            setMessageAlert({msg: error.message, type: 'error'})
        }
        
    };


    // Get Periods
    const getPeriods = useCallback(async ()=>{
        try {
            const result = await PeriodsService.getAll();
            setData(result);
        } catch (error: any) {
            console.log(error);
        } finally{
            setLoading(false);
        }
    }, [periods]);

    useEffect(()=>{
       getPeriods(); 
    },[])

   const handleEdit = (id: string) =>{
        setEnabled(!isEnabled);
        
   }


    return (
        <Container
            title={'Gestão dos períodos lectivos'}
            subtitle={'Período lectivo'}
            textBtnDetails={'Períodos'}

            showDetails={<TableView 
                isEnabled={isEnabled}
                isLoading={isLoading} 
                handleEdit={handleEdit}
                data={data}
                />}

            addNew={<PeriodsForm 
                handleChange={handleChange}
                handleSelect={handleSelect}
                handleSubmit={handleSubmit}
            />}
        />
    )
}

export { PeriodsManagement }