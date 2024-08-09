import { ChangeEvent, FormEvent, useState } from "react";
import styles from './Sessions.module.css';
import { FaChalkboardUser, FaUser, FaUserGraduate } from "react-icons/fa6";
import {FormLogin} from "../../components/form/FormLogin";
import ButtonLink from "../../components/Ui/button/ButtonLink";
import logoImg from '../../../public/logo-components/logoA.png';
import teacherImg from '../../../public/illustrations/teacher.svg';





function Teacher() {

    const [credentials, setCredentials] = useState({})
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        
    }
  
    return (
          <section className={`${styles.container} container-fluid bg-purple h-100vh d-flex flex-column justify-content-center align-items-center p-3`}>
            
            <div className="row card w-75 d-flex flex-row justify-content-center align-items-center  bg-white">
              <div className="col-lg-6 col-md-6 align-items-center">
                
                <div className={styles.logoImg}>
                  <img  src={logoImg} alt="" />
                </div>

                <div className="text-center">
                  <img className="img-fluid" src={teacherImg} alt="ilustração professores" />
                </div>

                <div className="mt-3 text-center">
                  <ButtonLink 
                    icon={<FaUser />} 
                    textButton={'Portal admin'} 
                    url={'/session/admin'}  
                    colorScheme={'btn_secondary'}  
                    textColor={'text_color_primary'}
                  /> 
  
                  <ButtonLink 
                    icon={<FaChalkboardUser />} 
                    textButton={'Portal professor'} 
                    url={'/session/teacher'}  
                    colorScheme={'btn_primary'}
                    textColor={'text_color_primary'}
                   /> 
  
                  <ButtonLink 
                    colorScheme={'btn_secondary'} 
                    icon={<FaUserGraduate />} 
                    textButton={'Portal aluno'} 
                    url={'/session/student'}  
                    textColor={'text_color_primary'}
                    />                
                </div>
              </div>
              <div className="col-lg-6 col-md-6  bg-secondary h-auto p-4">
                <FormLogin handleChange={handleChange} handleSubmit={handleSubmit}/>
              </div>
            </div>
          </section>
      )
  }
  
  export { Teacher };
  