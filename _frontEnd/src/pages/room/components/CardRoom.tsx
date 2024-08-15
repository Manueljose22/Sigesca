import { FaEdit, FaHistory } from "react-icons/fa";
import { ICardRoomProps } from "./types";
import { FaTrash } from "react-icons/fa6";
import { ChangeEvent, useState } from "react";
import { Loading } from "../../../components/Ui/loarding/Loading";
import Modal from "../../../components/Ui/modal/Modal";
import { EditRoom } from "./EditRoom";
import { Link } from "react-router-dom";







function CardRoom({ data, isLoading, setOnChange, handleDelete, submitEdit, Roomvalue, setOpenModal }: ICardRoomProps) {
    const [isOpen, setOpen] = useState<boolean>(false);
    

    const handleEnabled = () => {
        setOpen(!isOpen); //em analise
    }


    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setOnChange({...Roomvalue, [e.target.name]: e.target.value})
    }



    return (
        <div className="container-fluid mt-4">
            {
                isLoading ? <Loading /> : (
                    <>
                        {data.length > 0 &&
                            data.map(room => (
                                <div key={room.idSala} className="bg-white px-5 py-4 rounded-3 card mb-4">

                                    <div className='d-flex justify-content-between align-items-center shadown-5' >
                                        <h4 className='fs-6'>Sala de aula número {room.nome} </h4>
                                        <div className="d-flex align-items-center gap-2">
                                            <Link to={`/admin/gestao/salas/${room.idSala}`}  onClick={handleEnabled} className="border-0 bg-secondary  rounded text-dark "><FaEdit className="fs-4 p-1" /></Link>
                                            <button onClick={() => handleDelete(room.idSala)} className="border-0 "><FaTrash className="bg-secondary fs-4 rounded p-1" /></button>
                                        </div>
                                    </div>

                                    <div className='row mt-3 h-100' >
                                        <div className="col-lg-12 col-md-12 mt-1">
                                            <p className="bg-secondary border-0 outline-unstyled p-2 py-1 text-dark fw-5 rounded">{room.capacidadeAlunos}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </>
                )
            }

            <div className="container">
                <Modal isOpen={isOpen} setOpen={setOpen} whidth={'w-25'}>
                    <EditRoom 
                        handleSubmit={submitEdit} 
                        handleChange={handleChange}
                        roomValue={Roomvalue}
                        setRoom={setOnChange}
                    />
                </Modal>
            </div>

            <p className="my-4 bold text-center d-flex justify-content-center align-items-center fw-bold small">
                {data.length} salas listadas &nbsp; <FaHistory />
            </p>
        </div>
    )
}

export { CardRoom }