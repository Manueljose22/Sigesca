import { IInputProps } from './types';
import styles from './Input.module.css';



export default function Input({ name,label, handleOnChenge, maxLength, value, placeholder, type}: IInputProps) {

  return (
    <div className={` ${styles.container} my-3`}>
        <label className='form-label mb-2' htmlFor={name}>{label}</label>
        <input 
            className='form-control px-3'
            type={type}
            placeholder={placeholder}
            onChange={handleOnChenge}
            id={name}
            name={name}
            value={value}
            maxLength={maxLength}
            required
         />
    </div>
  )
}
