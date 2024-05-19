import styles from './Footer.module.css';


function Footer() {
  return (
    <footer className={`${styles.container} text-center my-4 text-primary`}>
        <p>&copy; {new Date().getFullYear()} | Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer