import { FaArrowAltCircleRight } from "react-icons/fa";
import ButtonLink from "../../../../components/Ui/button/ButtonLink"
import { ICardProps } from "./types";
import styles from './Card.module.css';



function Card({title, description, url}:ICardProps) {
  return (
    <div className={`${styles.container} card p-4 h-100`}>
        <h4>{title}</h4>
        <div>
            <p>{description}</p>
        </div>
        <ButtonLink 
            textButton={'Acessar'}
            colorScheme={'bg_blue'}
            iconRight={<FaArrowAltCircleRight />}
            url={url}
            textColor={'text_color_primary'}
        />
    </div>
  )
}

export default Card