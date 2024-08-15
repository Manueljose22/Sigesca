import styles from './Modal.module.css';
import { IModalProps } from './types';

function Modal({isOpen,setOpen, children, whidth}: IModalProps) {
  
    if (isOpen) {
        return (
            <div className={`${styles.background}`}>
                <div className={`${styles.modal} bg-secondary ${whidth}`}>
                    <div className='row'>
                        <div className="col-12 text-end px-2">
                            <button className='border-0 py-1 pe-3 px-2 rounded text-center' onClick={()=> setOpen(!isOpen)}>X</button>
                        </div>
                    </div>
                    <div className="container p-2">
                        {children}
                    </div>
                </div>
            </div>
        )
    }

}

export default Modal