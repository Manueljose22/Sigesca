import Input from '../Input/Input';
import styles from './Card.module.css';
import Button from '../../../../components/Ui/Button/Button';
import { FaUser, FaKey } from "react-icons/fa6";
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { IUserLogin } from './types';
import { userContext } from '../../../../contexts/auth/UserContext';





function FormLogin() {

  const [user, setUser] = useState<IUserLogin>({} as IUserLogin);
  const { login } = useContext(userContext);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(user);

  }


  return (
    <div className={`${styles.container} p-5`}>
      <form onSubmit={handleSubmit}>
        <Input
          textLabel={'Usuário'}
          name={'code'}
          type={'text'}
          id={'code'}
          placeholder={'Número de matricula'}
          handleChange={handleChange}
          icon={<FaUser />}
        />

        <Input
          textLabel={'Senha'}
          name={'password'}
          type={'password'}
          id={'password'}
          placeholder={'Digite sua senha'}
          handleChange={handleChange}
          icon={<FaKey />}
        />

        <Button type={'submit'} textButton={'Entrar'} />

      </form>
    </div>
  )
}

export default FormLogin;