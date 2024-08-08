import FormLogin from "../components/card/FormLogin";
import StudentImg from '../../../../public/illustrations/students.svg';
import logoImg from '../../../../public/logo-components/logoA.png';
import styles from './Student.module.css';
import ButtonLink from "../../../components/Ui/button/ButtonLink";
import { FaUser, FaUserGraduate, FaChalkboardUser } from 'react-icons/fa6';




function Student() {

  return (
    <section className={`${styles.container} bg-purple h-100vh d-flex justify-content-center w-100`}>
      <div className={styles.logoImg}>
        <img src={logoImg} alt="" />
      </div>
      <div className={`${styles.containerRow} row d-flex justify-content-center align-items-center  bg-white`}>
        <div className="col-lg-6 col-md-6 align-items-center">
          <div className={styles.containerImg}>
            <img className="img-fluid" src={StudentImg} alt="ilustração aluno" />
          </div>
          <div className="gap-2 mt-5">
            <ButtonLink
              icon={<FaUser />}
              textButton={'Portal admin'}
              url={'/session/admin'}
              colorScheme={'btn_secondary'}
            />

            <ButtonLink
              icon={<FaChalkboardUser />}
              textButton={'Portal professor'}
              url={'/session/teacher'}
              colorScheme={'btn_secondary'}
            />

            <ButtonLink
              colorScheme={'btn_primary'}
              icon={<FaUserGraduate />}
              textButton={'Portal aluno'}
              url={'/session/student'} />
          </div>
        </div>
        <div className="col-lg-6 col-md-6  bg-secondary h-auto p-5">
          <FormLogin />
          {/* <div className={styles.circulo}></div> */}
        </div>
      </div>
    </section>
  )
}

export { Student };
