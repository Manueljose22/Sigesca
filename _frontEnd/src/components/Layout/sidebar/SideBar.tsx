import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './SideBar.module.css';
import {FaAngleRight,FaUser, FaUserGraduate } from 'react-icons/fa';
import { BiSolidDashboard, BiSolidHome } from 'react-icons/bi';
import { ISideBarProps } from './types';
import logoImg from '../../../../public/logo-components/logoB.png';
import { FaChalkboardUser, FaGear } from 'react-icons/fa6';




function SideBar({isOpen}: ISideBarProps) {

  const [isActive, setActive] = useState<number | null>(null);
  const el = localStorage.getItem('key');

 

  const handleClick = (index: number)=>{
    
    if (!Number(el)) {
      localStorage.removeItem('key')
      setActive(index);
    } else{
      setActive(Number(el));
    }
    
    localStorage.setItem('key', index.toString());
  }

  window.addEventListener('load', ()=>{
    setActive(Number(el)); 
  })

  return (
    <aside className={`${styles.sidebar} ${styles[isOpen]}`}>
        <li className='list-unstyled  text-center p-0 m-0 px-4' >
            <img className='' src={logoImg} alt="sigesca" /> 
        </li>

        <hr className='m-0 p-0' />
       <li className={`${isActive === 0 ? styles.bg_active : ''}  px-4 fw-3 my-3 border-bottom-sm list-unstyled`}>
          <Link onClick={() => handleClick(0)} to={'/dashboard/'} className={`d-flex align-items-center`}>
            <BiSolidHome className='me-2' />  Painel
          </Link>
       </li>
       <nav className='mt-3 px-4'>
          <li  className={` ${isActive === 1 ? styles.bg_active : ''} pointer list-unstyled d-flex align-items-center mb-3'`}>
            <Link onClick={() => handleClick(1)} to={'/dashboard/gestao_geral'} className='d-flex align-items-center' >
              <BiSolidDashboard className='me-2' /> Gestão geral <FaAngleRight/>
            </Link>
          </li>


          {/* Students */}

          <li 
              className={` ${ isActive === 2 ? styles.bg_active : '' }  
              ${styles.btn_down} d-flex align-items-center mb-3  list-unstyled collapsed pointer align-items-center mt-2`} >

              <Link onClick={() => handleClick(2)}  to={'/dashboard/estudantes'} className='d-flex align-items-center'> 
                <FaUserGraduate className='me-2' /> 
                  Alunos 
                <FaAngleRight/> 
              </Link>
          </li>
        
          {/* Teachers */}

        
          <li 
              className={` ${isActive === 3 ? styles.bg_active : ''} ${styles.btn_down} 
              d-flex align-items-center mb-3 list-unstyled collapsed pointer align-items-center mt-2`} 
              >
              <Link onClick={() => handleClick(3)}  to={'/dashboard/admin/professores'} className='d-flex align-items-center'>
                <FaChalkboardUser className='me-2' /> 
                  Professores 
                <FaAngleRight/>
              </Link>
          </li>

          
          {/* Admin */}

          <li 
            className={` ${isActive === 4 ? styles.bg_active : ''} ${styles.btn_down}
             d-flex align-items-center mb-3 list-unstyled collapsed pointer align-items-center mt-2`} >
            
            <Link onClick={() => handleClick(4)}  to={'/dashboard/admin/usuarios'} className='d-flex align-items-center'> 
              <FaUser className='me-2' /> 
                Administradores 
              <FaAngleRight/>
            </Link>
            
          </li>
          
        {/* configuration */}

          <li className='my-2 list-unstyled d-flex align-items-center'>
              <Link to={'/dashboard/admin/configuracoes'} className='d-flex align-items-center'> 
                <FaGear /> 
                  Configurações
                </Link>
          </li>
         
       </nav>
       
    </aside>
  )
}

export { SideBar }