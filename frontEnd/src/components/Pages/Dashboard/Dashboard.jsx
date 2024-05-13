import { useState } from 'react'
import NavBar from '../../layout/NavBar'
import Sidebar from '../../layout/Sidebar'
import styles from './Dashboard.module.css'

import Course from '../Course'

export default function Dashboard({children}) {

  const [isOpen, setOpen] = useState('') 

  const toggleSidebar =() =>{
    isOpen === 'close' ? setOpen(' ') : setOpen('close') 
  }

  return (
    <section className={styles.wapper}>
        <Sidebar isOpen={isOpen} />
        <main className={styles.main}>
          <NavBar toggleSidebar={toggleSidebar} />
          
          <section className='p-4'>
            {children}
          </section>
        </main>

        
    </section>
  )
}
