import { inputProps } from "./types";
import styles from './Input.module.css';




function Input({name,icon, type, handleChange, id, value, textLabel, placeholder}: inputProps) {
  return (
    <div className={styles.container}>
        <label className= "my-2 form-label" htmlFor={name}>{textLabel}</label>
        <div className="d-flex align-items-center mb-4">
          <div className={styles.icons}>
            {icon}
          </div>
          <input
              type={type} 
              onChange={handleChange}
              id= {id}
              value = {value}
              name={name}
              placeholder={placeholder}
              required
              maxLength={30}
          />
        </div>
    </div>
  )
}

export default Input