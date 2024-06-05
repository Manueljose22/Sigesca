import { IToolsBarProps } from "./types";

import styles from './ToolBar.module.css';


function ToolsBar({ title, subtitle, textBtnDetails, textBtn, icon, iconOne, handleClick }: IToolsBarProps) {


    return (
        <div className={`${styles.container} row`}>
            <div className="col-lg-6 col-md-6">
                <h5>{title}</h5>
                <p><span>Gestão geral</span> / {subtitle}</p>
            </div>
            <div className="col-lg-6 col-md-6 text-end gap-2">
                <button onClick={handleClick} className="me-2">{iconOne} &nbsp;{textBtnDetails}</button>
                <button onClick={handleClick}>{icon} &nbsp;{textBtn}</button>
            </div>
        </div>
    )
}

export { ToolsBar }