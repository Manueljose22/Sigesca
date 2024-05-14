import ButtonLink from "../button/ButtonLink";
import styles from "./Card.module.css";

interface cardProps {
  title: string;
  img: string;
  btnText: string;
  url: string;
  icon: any;
}

function Card({ btnText, icon, img, title, url }: cardProps) {
  return (
    <div className={`${styles.container} card w-25 me-5 p-5 bg-secondary mt-4`}>
      <div className={`${styles.main_text}`}>
        <h4 className="text-primary mb-5">{title}</h4>
      </div>
      <div className="img">
        <img className="img-fluid" src={img} alt={"imagem do portal"} />
      </div>
      <div className="container-button">
        <ButtonLink icon={icon} url={url} textButton={btnText} />
      </div>
    </div>
  );
}

export default Card;
