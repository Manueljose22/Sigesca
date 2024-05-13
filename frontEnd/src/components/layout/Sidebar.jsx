import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom'
import {FaList, FaAngleDown,FaAngleRight,FaFileAlt,FaPenAlt,FaUser, FaMoneyBill, FaBookOpen, FaBook} from 'react-icons/fa'




export default function Sidebar({isOpen}) {
  return (
    <aside id='' className={`${styles.sidebar} ${styles[isOpen]}`}>
        <li className='border-bottom text-center fs-3 py-3 px-4' ><Link className='text-center' to={'/'} >SIGESCA</Link></li>
       <nav className='mt-3 px-4'>
          <li className='pointer ' data-bs-toggle='collapse' data-bs-target='#dropdown'>
            <FaList className='me-2' /> Gestão Acadêmica <FaAngleDown/>
          </li>
          <ul id='dropdown' className={`${styles.bg_dropdown} collapse bg-dropdown mt-1 py-2`}>
            <li className='mb-2'>
              <Link to={'/course'}><FaAngleRight/> Cursos</Link>
            </li>
            <li className='mb-2'>
              <Link to={'/level'}><FaAngleRight/> Nível Acadêmico</Link>
            </li>
            <li className='mb-2'>
              <Link to={'/disciplina'}><FaAngleRight/> Disciplinas</Link>
            </li>
            <li className='mb-2'>
              <Link to={'/epoca'}><FaAngleRight/> Epocas</Link> 
            </li>
            <li className='mb-2'>
              <Link to={'/classroom'}><FaAngleRight/> Turmas</Link>
            </li>
            <li className='mb-2'>
              <Link to={'/matricula'}><FaAngleRight/>Matriculas</Link>
            </li>
          </ul>


          <li className={`${styles.btn_down} collapsed pointer align-items-center mt-2`} data-bs-toggle='collapse' data-bs-target='#sidebar-dropdown'>
            <FaUser className='me-2' /> Gestão de Pessoal <FaAngleDown/>
          </li>
          <ul id='sidebar-dropdown' className={`${styles.bg_dropdown} align-items-center collapse bg-dropdown mt-1 py-2`}>
            <li className='mb-2'>
              <Link to={'/users'}><FaAngleRight/> Usuários</Link>
            </li>
            {/* <li className='mb-2'>
              <Link to={'/level'}>Nível Acadêmico</Link>
            </li> */}
          </ul>


          <li className='my-2'>
              <Link to={'/inscrition'}> <FaPenAlt className='me-2' /> Inscrições</Link>
          </li>
          <li className='my-2'>
              <Link to={'/avaliation'}><FaBookOpen className='me-2'/> Avaliações</Link>
          </li>
          <li className='my-2'>
              <Link to={'/avaliation'}><FaMoneyBill className='me-2' /> Pagamentos</Link>
          </li>
          <li className='my-2'>
              <Link to={'/avaliation'}> <FaFileAlt className='me-2' /> Relatórios</Link>
          </li>
          <li className='my-2'>
              {/* <Link to={'/avaliation'}> <FaFileAlt className='me-2' /> Configurações</Link> */}
          </li>
       </nav>
    </aside>
  )
}
