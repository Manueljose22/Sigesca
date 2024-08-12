import { useNavigate } from 'react-router-dom';

import styles from './NavBar.module.css'
import { INavBarProps } from './types'
import imgAvatar from '../../../../public/adminProfilePhotos/foto-vazia.jpg';
import { FaSignOutAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { userContext } from '../../../contexts/auth/UserContext';



function NavBar({toggleSidebar}: INavBarProps) {
  
  const navigate = useNavigate();
  const {logout} = useContext(userContext);

  const handleLogout = () =>{

    logout();
    navigate('/session/student');
  }

  return (
    <nav className={`${styles.container} container-fluid navbar navbar-expand px-3 py-2 justify-content-between border-bottom d-flex`}>
        <button onClick={toggleSidebar}  id='sidebar_toggle' type='button'>
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="container_avatar d-flex align-items-center gap-4">
           <div className={styles.avatar}>
              <img  src={imgAvatar} alt="avatar" />
           </div>
            <span>Manuel José</span>
            <button onClick={handleLogout} title='Sair'><FaSignOutAlt /></button>
        </div>
    </nav>
  )
}


export {NavBar}
