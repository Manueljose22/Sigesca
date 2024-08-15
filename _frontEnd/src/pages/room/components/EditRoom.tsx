import { useCallback, useEffect, useState } from "react";
import Button from "../../../components/Ui/button/Button"
import { Input } from "../../../components/Ui/input/Input"
import { IEditProps } from "./types"
import { RoomService } from "../../../services/room/RoomService";
import { IRoom } from "../../../services/room/types";
import { useParams } from "react-router-dom";



function EditRoom({handleChange, handleSubmit,setRoom, roomValue}: IEditProps) {
    // const [room, setRoom] = useState<IRoom | null>(null);
    const {id} = useParams<string>();


    const getById = useCallback(async () =>{
          
      try {
          const result = await RoomService.getById(id);
          setRoom(result);
      } catch (error: any) {
          console.log(error);
      }
    }, [])

  useEffect(()=>{
    getById(); 
  }, [])

 
  return (
    <div className="container w-100">
      <h4>Editar sala</h4>
      <hr className="m-0" />
        <form onSubmit={handleSubmit}>
            <Input 
              textLabel={'Número da sala'}
              name={'name'}
              type={'number'}
              handleChange={handleChange}
              border={'none'}
              iconBar={'none'}
              required={false}
              value={roomValue.nome}

            />         
            <Input 
              textLabel={'Capacidade de alunos'}
              name={'numberStudents'}
              type={'number'}
              handleChange={handleChange}
              border={'none'}
              iconBar={'none'}
              required={false}
              value={roomValue.capacidadeAlunos.toString()}
            /> 

            <Button type={"submit"} textButton={"Editar"} />        
        </form>
    </div>
  )
}

export {EditRoom}