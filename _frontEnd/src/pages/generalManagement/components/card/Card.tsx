import { FaArrowAltCircleRight } from "react-icons/fa";
import ButtonLink from "../../../../components/Ui/Button/ButtonLink"
import { ICardProps } from "./types";
import styles from './Card.module.css';



function Card({title, description, url}:ICardProps) {
  return (
    <div className={`${styles.container} card p-3`}>
        <h4>{title}</h4>
        <div>
            <p>{description}</p>
        </div>
        <ButtonLink 
            textButton={'Acessar'}
            colorScheme={'bg_blue'}
            iconRight={<FaArrowAltCircleRight />}
            url={url}
        />
    </div>
  )
}

export default Card