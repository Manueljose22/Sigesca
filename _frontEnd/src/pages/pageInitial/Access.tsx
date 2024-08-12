import logo from "../../../public/logo-components/logoB.png";
import { Card } from "../../components/Ui/card/Card";
import imgAdm from "../../../public/illustrations/admin.svg";
import imgStudent from "../../../public/illustrations/students.svg";
import imgTeacher from "../../../public/illustrations/teacher.svg";
import { FaRightToBracket } from "react-icons/fa6";
import { Footer } from "../../components/Layout/footer/Footer";

function Access() {
  return (
    <section className="bg-primary h-100vh p-4">

      <div className="text-center">
        <img className="mt-3 logo-access" src={logo} alt="logo" />
        <h5>BEM-VINDO AO SIGESCA, ESCOLHA O SEU TIPO DE ACESSO:</h5>
      </div>

      <div className="row text-center d-flex justify-content-center align-items-center">
        
        <div className="col-lg-3 col-md-4">
          <Card
            img={imgAdm}
            title={"ADMIN"}
            btnText={"Acessar"}
            url={"/session/admin"}
            icon={<FaRightToBracket />}
          />
        </div>
        <div className="col-lg-3 col-md-4">
        <Card
          img={imgTeacher}
          title={"PROFESSOR"}
          btnText={"Acessar"}
          url={"/session/professores"}
          icon={<FaRightToBracket />}
        />

        </div>
        <div className="col-lg-3 col-md-4">

        <Card
          img={imgStudent}
          title={"ALUNO"}
          btnText={"Acessar"}
          url={"/session/estudantes"}
          icon={<FaRightToBracket />}
        />
        </div>
        
        

      </div>

      <Footer />
    </section>
  );
}

export { Access };
