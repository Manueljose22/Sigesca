import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './SideBar.module.css';
import {FaAngleRight,FaUser, FaUserGraduate } from 'react-icons/fa';
import { BiSolidDashboard, BiSolidHome } from 'react-icons/bi';
import { ISideBarProps } from './types';
import logoImg from '../../../../public/logo-components/logo.png';
import { FaChalkboardUser, FaGear } from 'react-icons/fa6';




function SideBar({isOpen}: ISideBarProps) {

  const [isActive, setActive] = useState<number | null>(null);

  const handleClick = (index: number)=>{

    setActive(index);

  }

  return (
    <aside id='' className={`${styles.sidebar} ${styles[isOpen]}`}>
        <li className='list-unstyled fs-3 py-3 px-4'>
            <img className='' src={logoImg} alt="sigesca" /> 
            SIGESCA
        </li>

       <div className="px-4 fw-3 my-3 border-bottom-sm ">
          <BiSolidHome className='me-2' /> 
          Painel
       </div>
       <nav className='mt-3 px-4'>
          <li onClick={() => handleClick(1)} className={` ${isActive === 1 ? styles.bg_active : ''} pointer list-unstyled d-flex align-items-center mb-3'`}>
            <Link to={'/dashboard/management'} >
              <BiSolidDashboard className='me-2' /> Gestão geral <FaAngleRight/>
            </Link>
          </li>


          {/* Students */}

          <li onClick={() => handleClick(2)} 
              className={` ${ isActive === 2 ? styles.bg_active : '' }  
              ${styles.btn_down} d-flex align-items-center mb-3  list-unstyled collapsed pointer align-items-center mt-2`} >

              <Link to={'/dashboard/students'}> 
                <FaUserGraduate className='me-2' /> 
                  Alunos 
                <FaAngleRight/> 
              </Link>
          </li>
        
          {/* Teachers */}

        
          <li onClick={() => handleClick(3)} 
              className={` ${isActive === 3 ? styles.bg_active : ''} ${styles.btn_down} 
              d-flex align-items-center mb-3 list-unstyled collapsed pointer align-items-center mt-2`} 
              >
              <Link to={'/dashboard/admin/teachers'}>
                <FaChalkboardUser className='me-2' /> 
                  Professores 
                <FaAngleRight/>
              </Link>
          </li>

          
          {/* Admin */}

          <li onClick={() => handleClick(4)} 
            className={` ${isActive === 4 ? styles.bg_active : ''} ${styles.btn_down}
             d-flex align-items-center mb-3 list-unstyled collapsed pointer align-items-center mt-2`} >
            
            <Link to={'/dashboard/admin/users'}> 
              <FaUser className='me-2' /> 
                Administradores 
              <FaAngleRight/>
            </Link>
            
          </li>
          
        {/* configuration */}

          <li className='my-2 list-unstyled d-flex align-items-center'>
              <Link to={'/dashboard/admin/configuration'}> 
                <FaGear /> 
                  Configurações
                </Link>
          </li>
         
       </nav>
       
    </aside>
  )
}

export { SideBar }