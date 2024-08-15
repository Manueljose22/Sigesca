import { FaEdit, FaHistory } from 'react-icons/fa';
import styles from './CardPeriods.module.css';
import { Link} from 'react-router-dom';
import { Loading } from '../../../../components/Ui/loarding/Loading';
import { ITableViewProps } from './types';
import { FaCheck } from 'react-icons/fa6';



function CardPeriods({data, handleEdit, isLoading, isEnabled}: ITableViewProps) {

    
    return (
        <section className={`${styles.container_main} container-fluid mt-4`}>
            {isLoading ?  <Loading />  : (
                
            <div className=''>
                    {data.length > 0 &&
                    data.map(period => (
                    <section key={period.idPeriod} className={` ${styles.container} ${period.status? styles.active : styles.inative} rounded-3 bg-white px-5 py-4 card mb-4`}>

                        <div className={styles.header}>
                            <h4 className='fs-6'>Período lectivo do ano de {period.year} </h4>
                            <div >
                                <Link onClick={()=> handleEdit(period.idPeriod)}  to={`/dashboard/períodos/${period.idPeriod}`}>
                                    <FaEdit />
                                </Link>
                                
                                <FaCheck />
                            </div>
                        </div>

                        <div className='row mt-3 h-100' >
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
                                <form >
                                    <select disabled={isEnabled} >
                                        {
                                            period.status ? (

                                                <>
                                                    <option value={period.status}>Activo</option>
                                                    <option value={period.status}>Encerrado</option>
                                                </>
                                            ) : (
                                                
                                                <option value={period.status}>Encerrado</option>
    
                                            )
                                        }
                                    </select>
                                </form>
                            </div>
                        </div>
                    </section>
                ))
                }
                {
                    data.length === 0 && (<p className='text-center mt-5'>Não há períodos cadastrados.</p>)
                }
                
                <p className="my-4 bold text-center d-flex justify-content-center align-items-center fw-bold small">
                {data.length} períodos lectivos listados &nbsp; <FaHistory />
            </p>
            </div>
            
                
            )
            
            }

            
        </section>
    )
}

export { CardPeriods }