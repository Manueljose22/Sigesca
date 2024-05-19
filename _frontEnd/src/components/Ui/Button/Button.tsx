import { submitProps } from "./types";
import styles from './Button.module.css';



function Button({ textButton, type }: submitProps) {
  return (
    
      <button className={`${styles.btn_submit}`} type={type}>{textButton}</button>
    
  );
}

export default Button;
