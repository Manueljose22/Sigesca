import ImageError from '../../../public/illustrations/page_not_found.svg';
import styles from './ErrorPage.module.css';

function ErrorPage() {
  return (
    <div className={styles.container}>
        <img src={ImageError} alt="Página não encontada." />
    </div>
  )
}

export default ErrorPage;