import { IInputProps } from './types';
import styles from './Input.module.css';



function Input({ name, icon, type, handleChange, value, textLabel, placeholder, iconBar, maxLength, border }: IInputProps) {
  return (
    <div className={`${styles.container} ${styles[border]}`}>
      <label className="my-2 form-label" htmlFor={name}>{textLabel}</label>
      <div className="d-flex align-items-center mb-4">
        <div className={`${styles.icons} ${styles[iconBar]}`}>
          {icon}
        </div>
        <input
          type={type}
          onChange={handleChange}
          id={name}
          value={value}
          name={name}
          placeholder={placeholder}
          required
          maxLength={30}
        />
      </div>
    </div>
  )
}

export { Input }