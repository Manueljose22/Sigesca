import { ISelectProps } from './types';
import styles from './Select.module.css';



function Select({ handleOnchange, label, name, value, data }: ISelectProps) {
    return (
        <div className={styles.container}>
            <label className='form-label my-2' htmlFor={name}>{label}</label>
            <div className='d-flex flex-column align-items-center mb-4'>
                <select onChange={handleOnchange} className='form-control' name={name} id={name}>
                    <option value={value}>Activo</option>
                    <option value={value}>Encerrado</option> 
                </select>
            </div>
        </div>
    )
}

export { Select }