import { Input } from '../Ui/input/Input';
import styles from './FormLogin.module.css';
import Button from '../Ui/button/Button';
import { FaUser, FaKey } from "react-icons/fa6";
import { IFormLoginProps } from './types';





function FormLogin({handleChange, handleSubmit}: IFormLoginProps) {

  return (
    <div className={`${styles.container}  w-75 p-5`}>
      <form onSubmit={handleSubmit}>
        <Input
          textLabel={'Usuário'}
          name={'code'}
          type={'text'}
          placeholder={'Número de matricula'}
          handleChange={handleChange}
          icon={<FaUser />}
        />

        <Input
          textLabel={'Senha'}
          name={'password'}
          type={'password'}
          placeholder={'Digite sua senha'}
          handleChange={handleChange}
          icon={<FaKey />}
        />

        <Button type={'submit'} textButton={'Entrar'} />

      </form>
    </div>
  )
}

export { FormLogin };