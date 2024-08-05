import { FaEdit } from 'react-icons/fa';
import styles from './TableView.module.css';
import { Link, useSearchParams } from 'react-router-dom';
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { PeriodsService } from '../../../../services/periods/PeriodsService';
import { setMessageAlert } from '../../../../utils/message/setMessageAlert';
import { ApiException } from '../../../../utils/api/ApiException';
import { IDataPeriods } from './types';
import { FaCheck } from 'react-icons/fa6';
import { Loading } from '../../../../components/Ui/loarding/Loading';



function TableView() {

    const [periods, setPeriods] = useState<IDataPeriods[]>([]);
    const [isEnabled, setEnabled] = useState<boolean>(false);
    const [status, setStatus] = useState('');
    const [isLoading, setLoading] = useState<boolean>(true);


    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setStatus(e.target.options[e.target.selectedIndex].text);
    }

    const getPeriods = useCallback(async () => {

        const result = await PeriodsService.getAll();

        if (result instanceof Error) {
            setMessageAlert({ title: '', msg: result.message, type: 'error' });
        }

        setPeriods(result);
        
    }, [periods])

    useEffect(() => {
        getPeriods();
     }, [])

    const handleEnabledEdit = () =>{
        setEnabled(!isEnabled);
    }

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setEnabled(!isEnabled);


        const [searchParams] = useSearchParams()

        const id = searchParams.get('periods/')

        console.log(id);
        
        const data: IDataPeriods = {
            idPeriod: '',
            year: '',
            dateStart: '',
            dateEnd: '',
            status: status
        }

        const result = await PeriodsService.update(data,'123');

        if (result instanceof ApiException) {
            setMessageAlert({ title: '', msg: result.message, type: 'error' });
        }
        
    }

    return (
        <>
            {isLoading ?  <Loading />  : (<p>AHhd</p>)
            
            }

            {/* {periods.length > 0 &&
                periods.map(period => (
                    <section key={period.idPeriod} className={` ${styles.container} 
                    ${period.status ? styles.active : styles.inative} bg-white px-5 py-4 card mb-4`}>

                        <div className={styles.header}>
                            <h4 className='fs-6'>Período lectivo do ano de {period.year} </h4>
                            <div >
                                <Link onClick={handleEnabledEdit} to={`/dashboard/periods/${period.idPeriod}`}>
                                    <FaEdit />
                                </Link>
                                <FaCheck />
                            </div>
                        </div>

                        <div className='row mt-3 ' >
                            <div className="col-md-4 mt-1">
                                <h6>Data de início:</h6>
                                <p>{period.dateStart.substring(0, 10)}</p>
                            </div>
                            <div className="col-md-4 mt-1">
                                <h6>Data de fim:</h6>
                                <p>{period.dateEnd.substring(0, 10)}</p>
                            </div>
                            <div className="col-md-4">
                                <h6>Situação:</h6>
                                <form onSubmit={handleSubmit}>
                                    <select disabled={isEnabled} onChange={handleSelect}>
                                        {
                                            period.status ? (

                                                <option value={period.status}>Activo</option>
                                            ) : (
                                                
                                                <option value={period.status}>Agendado</option>
    
                                            )
                                        }
                                    </select>
                                </form>
                            </div>
                        </div>
                    </section>
                ))} */}
                
                {/* { periods.length === 0 &&
                 <p> Não há períodos registrados! <p/> 
                } */}
                
        </>
    )
}

export { TableView }