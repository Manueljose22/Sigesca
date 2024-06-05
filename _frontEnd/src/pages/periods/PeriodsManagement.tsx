import { Container } from "../../components/containers/Container";
import { PeriodsForm } from "./components/cards/PeriodsForm";



function PeriodsManagement() {

    

    return (
        <Container
            title={'Gestão dos períodos lectivos'}
            subtitle={'Período lectivo'}
            textBtnDetails={'Períodos'}

            
            showDetails={'Ver'}


            addNew={<PeriodsForm />}
        />
    )
}

export { PeriodsManagement }