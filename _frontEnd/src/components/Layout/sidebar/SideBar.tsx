import { Link } from 'react-router-dom';
import styles from './SideBar.module.css';
import {FaAngleDown,FaAngleRight,FaUser, FaUserGraduate } from 'react-icons/fa';
import { BiSolidDashboard } from 'react-icons/bi';
import { ISideBarProps } from './types';
import logoImg from '../../../../public/logo-components/logo.png';
import { FaChalkboardUser, FaGear } from 'react-icons/fa6';




function SideBar({isOpen}: ISideBarProps) {
  return (
    <aside id='' className={`${styles.sidebar} ${styles[isOpen]}`}>
        <li className='list-unstyled fs-3 py-3 px-4'>
            <img className='' src={logoImg} alt="sigesca" /> SIGESCA
        </li>

       <nav className='mt-3 px-4'>
          <li className='pointer list-unstyled d-flex align-items-center mb-3' data-bs-toggle='collapse' data-bs-target='#dropdown'>
            <BiSolidDashboard className='me-2' /> Gestão Acadêmica <FaAngleDown/>
          </li>
          <ul id='dropdown' className={`${styles.bg_dropdown} list-unstyled collapse bg-dropdown mt-1 py-2`}>
            <li className='mb-2 list-unstyled d-flex align-items-center'>
              <Link to={'/course'}><FaAngleRight/> Ano Lectivo</Link>
            </li>
            <li className='mb-2 list-unstyled d-flex align-items-center'>
              <Link to={'/course'}><FaAngleRight/> Cursos</Link>
            </li>
            <li className='mb-2 list-unstyled d-flex align-items-center'>
              <Link to={'/level'}><FaAngleRight/> Nível Acadêmico</Link>
            </li>
            <li className='mb-2 d-flex align-items-center'>
              <Link to={'/disciplina'}><FaAngleRight/> Disciplinas</Link>
            </li>
            <li className='mb-2 d-flex align-items-center'>
              <Link to={'/epoca'}><FaAngleRight/> Epocas</Link> 
            </li>
            <li className='mb-2 d-flex align-items-center'>
              <Link to={'/classroom'}><FaAngleRight/> Turmas</Link>
            </li>
            <li className='mb-2 d-flex align-items-center'>
              <Link to={'/classroom'}><FaAngleRight/> Salas</Link>
            </li>
            <li className='mb-2 d-flex align-items-center'>
              <Link to={'/matricula'}><FaAngleRight/> Matriculas</Link>
            </li>
          </ul>


          <li className={`${styles.btn_down} d-flex align-items-center mb-3  list-unstyled collapsed pointer align-items-center mt-2`} data-bs-toggle='collapse' data-bs-target='#sidebar-student'>
            <FaUserGraduate className='me-2' /> Alunos <FaAngleDown/>
          </li>
          <ul id='sidebar-student' className={`${styles.bg_dropdown} list-unstyled align-items-center collapse bg-dropdown mt-1 py-2`}>
            <li className='mb-2 d-flex align-items-center '>
              <Link to={'#'}><FaAngleRight/> Cadastrar</Link>
            </li>
        
          </ul>
          <li className={`${styles.btn_down} d-flex align-items-center mb-3 list-unstyled collapsed pointer align-items-center mt-2`} data-bs-toggle='collapse' data-bs-target='#sidebar-teacher'>
            <FaChalkboardUser className='me-2' /> Professores <FaAngleDown/>
          </li>
          <ul id='sidebar-teacher' className={`${styles.bg_dropdown}   list-unstyled align-items-center collapse bg-dropdown mt-1 py-2`}>
            <li className='mb-2 d-flex align-items-center'>
              <Link to={'/users'}><FaAngleRight/> Cadastrar</Link>
            </li>
        
          </ul>

          <li className={`${styles.btn_down} d-flex align-items-center mb-3 list-unstyled collapsed pointer align-items-center mt-2`} data-bs-toggle='collapse' data-bs-target='#sidebar-admin'>
            <FaUser className='me-2' /> Administradores <FaAngleDown/>
          </li>
          <ul id='sidebar-admin' className={`${styles.bg_dropdown}   list-unstyled align-items-center collapse bg-dropdown mt-1 py-2`}>
            <li className='mb-2 d-flex align-items-center'>
              <Link to={'/users'}><FaAngleRight/> Cadastrar</Link>
            </li>
        
          </ul>


          <li className='my-2 list-unstyled d-flex align-items-center'>
              <Link to={'/config'}> <FaGear /> Configurações</Link>
          </li>
         
       </nav>
    </aside>
  )
}

export { SideBar }