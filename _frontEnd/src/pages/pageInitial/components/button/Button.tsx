import { Link } from "react-router-dom";
import { buttonProps } from "./types";
import styles from './Button.module.css';



function Button({ url, textButton, icon}: buttonProps) {
  return (
    <div className="mt-5">
      <Link className={`${styles.btn_primary}`} to={url}>
        {icon} &nbsp; &nbsp; {textButton}
      </Link>
    </div>
  );
}

export default Button;
