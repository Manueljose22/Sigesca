import { useState } from "react";
import { IDashboardProps } from "./types";
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
            
            <section className='p-4'>
                <Outlet />
            </section>
          </main>
  
          
      </section>
    )
  }

  export {Dashboard}