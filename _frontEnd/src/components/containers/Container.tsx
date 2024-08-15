import { BiGridAlt } from "react-icons/bi"
import { ToolsBar } from "../toolsBar/ToolsBar"
import { FaPlus } from "react-icons/fa6"
import { IContainerProps } from "./types"
import { useState } from "react";


function Container({ title, subtitle, textBtnDetails, addNew, showDetails, isShow }: IContainerProps) {

    const [isVisiblity, setVisiblity] = useState<boolean>(false);

    
    
    const handleClick = () => {
        setVisiblity(!isVisiblity);
    };


    return (
        <div className="conatiner row">
            <div className="col-12">
                <ToolsBar
                    title={title}
                    subtitle={subtitle}
                    iconOne={<BiGridAlt />}
                    icon={<FaPlus />}
                    textBtnDetails={textBtnDetails}
                    textBtn={'Adicionar'}
                    handleClick={handleClick}
                />
            </div>
            <div className="row">
                {isVisiblity ?? isShow ? (

                    <div className="col-lg-6 col-md-6 w-100">
                        {addNew}
                    </div>

                ) : (

                    <div className="col-lg-6 col-md-6 w-100">
                        {showDetails}
                    </div>
                )

                }
            </div>
        </div>
    )
}

export { Container }