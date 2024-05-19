import { cardProps } from "./types";
import Button from "../button/Button";
import styles from "./Card.module.css";

function Card({ btnText, icon, img, title, url }: cardProps) {
  return (
    <div
      className={`${styles.container} card w-25 shadow p-5 bg-secondary mt-3`}
    >
      <div className={`${styles.main_text}`}>
        <h4 className="text-primary mb-4">{title}</h4>
      </div>
      <div className="img">
        <img className="img-fluid" src={img} alt={"imagem do portal"} />
      </div>
      <div className="container-button">
        <Button icon={icon} url={url} textButton={btnText} />
      </div>
    </div>
  );
}

export default Card;
