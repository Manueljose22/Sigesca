import { Link } from "react-router-dom";
import { buttonProps } from "./types";
import styles from './Button.module.css';



function ButtonLink({ url, textButton, icon, colorScheme, iconRight, textColor }: buttonProps) {
  return (
    <Link className={`${styles[colorScheme]} ${styles[textColor]}`} to={url}>
      {icon} &nbsp;{textButton}  &nbsp; {iconRight}
    </Link>
  );
}

export default ButtonLink;
