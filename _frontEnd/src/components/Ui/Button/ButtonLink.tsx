import { Link } from "react-router-dom";
import { buttonProps } from "./types";
import styles from './Button.module.css';



function ButtonLink({ url, textButton, icon, colorScheme, iconRight }: buttonProps) {
  return (
    <Link className={`${styles[colorScheme]}`} to={url}>
      {icon} &nbsp;{textButton}  &nbsp; {iconRight}
    </Link>
  );
}

export default ButtonLink;
