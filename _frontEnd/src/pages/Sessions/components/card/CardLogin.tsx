import Input from '../Input/Input';
import styles from './Card.module.css';
import Button from '../../../../components/Ui/Button/Button';
import { FaUser, FaKey } from "react-icons/fa6";
import { cardProps } from './types';





function CardLogin({handleSubmit, handleChange}: cardProps) {


  return (
    <div className={`${styles.container} p-5`}>
        <form onSubmit={handleSubmit}>
          <Input
            textLabel={'Usuário'}
            name={'username'}
            type={'text'}
            id={'username'}
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

export default CardLogin;