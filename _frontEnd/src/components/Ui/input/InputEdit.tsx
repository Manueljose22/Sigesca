import { IInputEditProps } from './types';
import styles from './Input.module.css';



function InputEdit({ name, type, handleChange, value, textLabel, readOnly }: IInputEditProps) {
  return (
    <div className={`${styles.inputEdit} d-flex flex-column`}>
        <h6><label className="my-2 form-label" htmlFor={name}>{textLabel}</label></h6>
        <input 
          className='bg-secondary border-0 outline-unstyled p-2 py-1 text-dark fw-5 rounded'
          type={type}
          onChange={handleChange}
          id={name}
          value={value }
          name={name}
          required
          readOnly={readOnly}
        />
    </div>
  )
}

export { InputEdit }