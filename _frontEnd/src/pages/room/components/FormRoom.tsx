import { ChangeEvent } from "react"
import { Input } from "../../../components/Ui/input/Input"
import Button from "../../../components/Ui/button/Button"
import { ICreateRoomProps } from "./types"




function FormRoom({setCreateData, createRoomValue, onSubmit}: ICreateRoomProps) {


    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setCreateData({...createRoomValue, [e.target.name]: e.target.value});
    }

  return (
    <div className="container-fluid card px-5 py-3 mt-3 w-100">
        <div className="border-bottom mb-3">
            <h5 className="h5">Adicionar nova sala:</h5>
        </div>

        <form onSubmit={onSubmit} className="row" >
            <div className="col-lg-4 col-md-4 col-sm-4">
                <Input 
                    textLabel={'Número da sala'}
                    name={'name'}
                    type={'number'}
                    border={'border'}
                    iconBar={'none'}
                    handleChange={handleChange}
                    required={true}
                    placeholder={'Digite o número da sala'}
                />
            </div>
            <div className="col-lg-5 col-md-4 col-sm-4">
                <Input 
                    textLabel={'Capacidade de alunos'}
                    name={'numberStudents'}
                    type={'number'}
                    border={'border'}
                    iconBar={'none'}
                    handleChange={handleChange}
                    required={true}
                    placeholder={'Digite o número de alunos'}
                />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 pt-4">
                <Button textButton={'Adicionar'} type={'submit'} colorScheme={'btn-success'} />
            </div>
        </form>

    </div>
  )
}

export {FormRoom}