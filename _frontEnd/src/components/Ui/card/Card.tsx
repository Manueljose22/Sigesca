import { cardProps } from "./types";
import styles from "./Card.module.css";
import ButtonLink from "../../../components/Ui/button/ButtonLink";

function Card({ btnText, icon, img, title, url }: cardProps) {
  return (
    <div className={`${styles.container} card shadow p-4 bg-secondary mt-3`}>
      <div className={`${styles.main_text}`}>
        <h4 className="text-primary mb-4">{title}</h4>
      </div>
      <div className="img">
        <img className="img-fluid" src={img} alt={"imagem do portal"} />
      </div>
      <div className="container-button mt-4">
        <ButtonLink
          icon={icon}
          url={url}
          textButton={btnText}
          textColor={'text_Color_secondary'}
          colorScheme={'btn_primary'}
        />
      </div>
    </div>
  );
}

export { Card };
