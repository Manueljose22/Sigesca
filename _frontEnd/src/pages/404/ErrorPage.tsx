import { Link } from "react-router-dom";
import ImageError from "../../../public/illustrations/page_not_found.svg";
import styles from "./ErrorPage.module.css";

function ErrorPage() {
  return (
    <div className={styles.container}>
      <img src={ImageError} alt="Página não encontada." />
      <p className="mt-3">
        Página não encontada! Voltar a <Link to={"/"}>página inicial.</Link>
      </p>
    </div>
  );
}

export { ErrorPage };
