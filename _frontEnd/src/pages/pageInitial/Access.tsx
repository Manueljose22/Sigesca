import logo from "../../../public/logo-components/logoB.png";
import Card from "./components/Card/Card";
import imgAdm from "../../../public/illustrations/admin.svg";
import imgStudent from "../../../public/illustrations/students.svg";
import imgTeacher from "../../../public/illustrations/teacher.svg";
import { FaRightToBracket } from "react-icons/fa6";
import Footer from "../../components/Layout/footer/Footer";

function Access() {
  return (
    <section className="bg-primary h-100vh ">
      <div className="text-center">
        <img className="mt-3 logo-access" src={logo} alt="logo" />
        <h5>BEM-VINDO AO SIGESCA, ESCOLHA O SEU TIPO DE ACESSO:</h5>
      </div>

      <div className="card-container d-flex gap-5 text-center justify-content-center">
        <Card
          img={imgAdm}
          title={"ADMIN"}
          btnText={"Acessar"}
          url={"/session/admin"}
          icon={<FaRightToBracket />}
        />

        <Card
          img={imgTeacher}
          title={"PROFESSOR"}
          btnText={"Acessar"}
          url={"/session/teacher"}
          icon={<FaRightToBracket />}
        />
        <Card
          img={imgStudent}
          title={"ALUNO"}
          btnText={"Acessar"}
          url={"/session/student"}
          icon={<FaRightToBracket />}
        />
      </div>

      <Footer />
    </section>
  );
}

export { Access };
