
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Input from "../../../../components/Ui/input/Input";
import { Select } from "../../../../components/Ui/select/Select";
import { IPeriods } from "../../../../services/periods/types";
import { PeriodsService } from "../../../../services/periods/PeriodsService";
import { ApiException } from "../../../../utils/api/ApiException";
import { setMessageAlert } from "../../../../utils/message/setMessageAlert";





export function PeriodsForm() {

    const [periods, setPeriods] = useState<IPeriods>({} as IPeriods);
    const [status, setStatus] = useState('');
    const navigate = useNavigate();




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

        const result = await PeriodsService.create(data)

        if (result instanceof ApiException) {
            setMessageAlert({ title: '', msg: result.message, type: 'error' });
        }

        navigate('/dashboard/periods');
        
    };


    return (
        <div className='card px-5 py-3 mt-3' >
            <div className="border-bottom" >
                <h5 className="h5" >Adicionar novo período lectivo</h5>
            </div>
            <div className="m3-2">
                <form onSubmit={handleSubmit} className='d-flex gap-3 align-items-center'>
                    <Input
                        label={'Ano:'}
                        name={'year'}
                        type={'number'}
                        handleOnChenge={handleChange}
                        maxLength={4}
                    />

                    <Input
                        label={'Data de inicio:'}
                        name={'dateStart'}
                        type={'date'}
                        handleOnChenge={handleChange}
                    />
                    <Input
                        label={'Data de fim:'}
                        name={'dateEnd'}
                        type={'date'}
                        handleOnChenge={handleChange}
                    />
                    <Select
                        label={'Situação:'}
                        name={'status'}
                        handleOnchange={handleSelect}
                    />

                    <div className="text-end my-2">
                        <br />
                        <button type="submit" className="btn btn-success mt-1 px-4"> Adicionar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
