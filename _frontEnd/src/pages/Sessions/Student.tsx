import StudentImg from '../../../public/illustrations/students.svg';
import logoImg from '../../../public/logo-components/logoA.png';
import styles from './Sessions.module.css';
import ButtonLink from "../../components/Ui/button/ButtonLink";
import { FaUser, FaUserGraduate, FaChalkboardUser } from 'react-icons/fa6';
import { FormLogin } from '../../components/form/FormLogin';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { IUserLogin } from '../../hooks/auth/types';
import { userContext } from '../../contexts/auth/UserContext';
import { useNavigate } from 'react-router-dom';




function Student() {
  const [credentials, setCredentials] = useState<IUserLogin>({} as IUserLogin);
  const { login } = useContext(userContext);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(credentials);
    navigate('/dashboard')
  }
  return (
    <section className={`${styles.container} container-fluid bg-purple h-100vh d-flex flex-column justify-content-center align-items-center p-3`}>
      
      <div className="row card w-75 d-flex flex-row justify-content-center align-items-center  bg-white">
        
        <div className="col-lg-6 col-md-4 d-flex flex-column">
        
        <div className={`${styles.logoImg}`}>
          <img className='img-fluid' src={logoImg} alt="logo sigesca" />
        </div>

          <div className="text-center">
            <img className="img-fluid" src={StudentImg} alt="ilustração aluno" />
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
              colorScheme={'btn_secondary'}
              textColor={'text_color_primary'}
            />

            <ButtonLink
              colorScheme={'btn_primary'}
              icon={<FaUserGraduate />}
              textButton={'Portal aluno'}
              url={'/session/student'}
              textColor={'text_color_primary'} 
              />
          </div>
        </div>
        <div className="col-lg-6 col-md-4  bg-secondary h-auto p-4">
          <FormLogin handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
      </div>
    </section>
  )
}

export { Student };
