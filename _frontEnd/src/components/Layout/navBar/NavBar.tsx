import styles from './NavBar.module.css'
import { INavBarProps } from './types'



function NavBar({toggleSidebar}: INavBarProps) {
  return (
    <nav className='navbar navbar-expand px-3 py-3 border-bottom '>
        <button onClick={toggleSidebar} className='btn' id='sidebar_toggle' type='button'>
            <span className="navbar-toggler-icon"></span>
        </button>
    </nav>
  )
}


export {NavBar}