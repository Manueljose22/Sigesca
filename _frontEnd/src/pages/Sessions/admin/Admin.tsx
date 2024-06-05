import { ChangeEvent, FormEvent, useState } from "react";

import CardLogin from "../components/card/FormLogin";
import AdminImg from "../../../../public/illustrations/admin.svg";
import logoImg from '../../../../public/logo-components/logoA.png';
import styles from "./Admin.module.css";
import ButtonLink from "../../../components/Ui/Button/ButtonLink";
import { FaUser, FaUserGraduate, FaChalkboardUser } from "react-icons/fa6";




function Admin() {

    const [credentials, setCredentials] = useState({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

  return (
    <section className={`${styles.container} bg-purple h-100vh d-flex justify-content-center w-100`}>


      <div className={styles.logoImg}>
            <img  src={logoImg} alt="" />
      </div>
      
      <div className={`${styles.containerRow} row d-flex justify-content-center align-items-center  bg-white`}>
        
        <div className="col-lg-6 col-md-6 align-items-center">
          <div>
            <img className="img-fluid" src={AdminImg} alt="ilustração aluno" />
          </div>
          <div className="gap-2 mt-5">
            <ButtonLink
              icon={<FaUser />}
              textButton={"Portal admin"}
              url={"/session/admin"}
              colorScheme={"btn_primary"}
            />

            <ButtonLink
              icon={<FaChalkboardUser />}
              textButton={"Portal professor"}
              url={"/session/teacher"}
              colorScheme={"btn_secondary"}
            />

            <ButtonLink
              colorScheme={"btn_secondary"}
              icon={<FaUserGraduate />}
              textButton={"Portal aluno"}
              url={"/session/student"}
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-6  bg-secondary h-auto p-5">
          <CardLogin handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
}

export { Admin };
