import { submitProps } from "./types";
import styles from './Button.module.css';



function Button({ textButton, type, colorScheme }: submitProps) {
  return (
    
      <button className={`${styles.btn_submit} ${colorScheme}`} type={type}>{textButton}</button>
    
  );
}

export default Button;
