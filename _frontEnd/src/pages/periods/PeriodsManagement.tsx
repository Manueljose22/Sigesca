import { Container } from "../../components/containers/Container";
import { TableView } from "../../components/Ui/table/TableView";
import { PeriodsForm } from "./components/form/PeriodsForm";



function PeriodsManagement() {

    

    return (
        <Container
            title={'Gestão dos períodos lectivos'}
            subtitle={'Período lectivo'}
            textBtnDetails={'Períodos'}

            
            showDetails={<TableView />}


            addNew={<PeriodsForm />}
        />
    )
}

export { PeriodsManagement }