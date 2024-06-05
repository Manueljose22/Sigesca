import { useState } from "react";
import {SideBar} from "../../components/Layout/sidebar/SideBar";

import styles from './Dashboard.module.css';
import { NavBar } from "../../components/Layout/navBar/NavBar";
import { Outlet } from "react-router-dom";





function Dashboard() {

    const [isOpen, setOpen] = useState(''); 
  
    const toggleSidebar =() =>{
      isOpen === 'close' ? setOpen(' ') : setOpen('close') 
    }
  
    return (
      <section className={styles.wapper}>
          <SideBar isOpen={isOpen} />
          <main className={styles.main}>
            <NavBar toggleSidebar={toggleSidebar} />
            
            <section className='py-4 px-5 container bg-secondary h-100vh'>
                <Outlet />
            </section>
          </main>
  
          
      </section>
    )
  }

  export {Dashboard}