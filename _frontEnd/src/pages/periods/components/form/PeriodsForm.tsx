
import { Input } from "../../../../components/Ui/input/Input";
import { Select } from "../../../../components/Ui/select/Select";
import { IFormPeriodsProps } from "./types";






function PeriodsForm({ handleSubmit, handleChange, handleSelect }: IFormPeriodsProps) {

    return (
        <div className='card px-5 py-3 mt-3 w-100' >
            <div className="border-bottom mb-3" >
                <h5 className="h5" >Adicionar novo período lectivo</h5>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit} className='row'>
                    <div className="col-lg-2 col-md-3 col-sm-4">
                        <Input
                            textLabel={'Ano:'}
                            name={'year'}
                            type={'number'}
                            handleChange={handleChange}
                            maxLength={4}
                            iconBar={'none'}
                            border={'border'}

                        />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4">
                        <Input
                            textLabel={'Data de inicio:'}
                            name={'dateStart'}
                            type={'date'}
                            handleChange={handleChange}
                            iconBar={'none'}
                            border={'border'}
                        />

                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4">
                        <Input
                            textLabel={'Data de fim:'}
                            name={'dateEnd'}
                            type={'date'}
                            handleChange={handleChange}
                            iconBar={'none'}
                            border={'border'}
                        />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4">
                        <Select
                            label={'Situação:'}
                            name={'status'}
                            handleOnchange={handleSelect}
                        />

                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 d-flex align-items-center">
                        <div className="mt-3">
                            <button type="submit" className="btn btn-success">Adicionar</button>
                        </div>
                    </div>


                </form>
            </div>
        </div>
    )
}

export { PeriodsForm }