import logo from '../../../public/logo-components/logoB.png';
import Card from '../../components/card/Card';
import imgAdm from '../../../public/illustrations/admin.svg';
import imgStudent from '../../../public/illustrations/students.svg';
import imgTeacher from '../../../public/illustrations/teacher.svg';
import {FaOutdent} from 'react-icons/fa';



function Access() {
  return (
    <section className='bg-primary h-100vh '>

        <div className='text-center'>
            <img className='mt-3 logo-access' src={logo} alt="logo" />
            <h5>BEM-VINDO AO SIGESCA, ESCOLHA O SEU TIPO DE ACESSO:</h5>
        </div>

        <div className="card-container d-flex text-center justify-content-center">
            <Card 
                img={imgAdm} 
                title={'ADMIN'}
                btnText={'Acessar'}
                url={'/admin'}
                icon={<FaOutdent />}
            />

            <Card 
                img={imgTeacher} 
                title={'PROFESSOR'} 
                btnText={'Acessar'}
                url={'/teacher'}
                icon={<FaOutdent />}
            />
            <Card 
                img={imgStudent} 
                title={'PROFESSOR'} 
                btnText={'Acessar'}
                url={'/students'}
                icon={<FaOutdent />}
            />
        </div>

    </section>
  )
}

export default Access;