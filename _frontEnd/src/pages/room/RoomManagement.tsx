import { FormEvent, useCallback, useEffect, useState } from "react"
import { Container } from "../../components/containers/Container"
import {CardRoom} from "./components/CardRoom"
import { RoomService } from "../../services/room/RoomService"
import { setMessageAlert } from "../../utils/message/setMessageAlert"
import { ICreateRoom, IRoom, IUpdateRoom } from "../../services/room/types"
import { useNavigate, useParams } from "react-router-dom"
import { FormRoom } from "./components/FormRoom"





function RoomManagement() {
    const [data, setData] = useState<IRoom[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [load, setLoad] = useState<boolean>(false);
    const [isShowContainer, setShowContainer] = useState<boolean>(false);
    const [dataRoom, setDataRoom] = useState<IRoom | null>(null);
    const [createData, setcreateData] = useState<ICreateRoom[]>([]);

    const {id} = useParams<string>();
    const navigate = useNavigate();


    const handleCreate = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
       
        try {
            await RoomService.create(createData)
        } catch (error: any) {
           setMessageAlert({msg: error.message, type: 'error'}); 
        }
        setShowContainer(!isShowContainer)
        setLoad(!load);
    }

    const handleSaveEdit = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
       
        try {
            await RoomService.update(dataRoom, id);
        } catch (error: any) {
           setMessageAlert({msg: error.message, type: 'error'}); 
        }
        setLoad(!load)
        navigate('/admin/gestao/salas')
    }
    

    const handleDelete = async (id: string) => {
        
        setData(data.filter(item=> item.idSala !== id));
        
        try {
            await RoomService.deleteById(id);
        } catch (error: any) {
            setMessageAlert({msg: error.message, type: 'error'});
        }
    }


    const getAll = useCallback( async () =>{
        try {
            const result = await RoomService.getAll();
            setData(result);
        } catch (error: any) {
            setMessageAlert({msg: error.message, type: 'error'});
        } finally{
            setLoading(false);
        }
    }, [data])
    useEffect(() =>{
        getAll()
    }, [load])


  return (
    <Container
            title={'Gestão das salas'}
            subtitle={'salas'}
            textBtnDetails={'Salas'}
            isShow={isShowContainer}

            showDetails={<CardRoom
                data={data}
                isLoading={isLoading}
                handleDelete={handleDelete}
                value={dataRoom}
                setOnChange={setDataRoom}
                submitEdit={handleSaveEdit}
                setOpenModal={load}
            />}

            addNew={<FormRoom 
                createRoomValue={createData}
                setCreateData={setcreateData}
                onSubmit={handleCreate}
            />}
        />
  )
}

export { RoomManagement }