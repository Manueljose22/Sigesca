import { ISelectProps } from './types'



function Select({ handleOnchange, label, name, value, data }: ISelectProps) {
    return (
        <div>
            <label className='form-label' htmlFor={name}>{label}</label>
            <select onChange={handleOnchange} className='form-control px-3' name={name} id={name}>
                <option value={value}>Activo</option>
                <option value={value}>Agendado</option>
                
            </select>
        </div>
    )
}

export { Select }