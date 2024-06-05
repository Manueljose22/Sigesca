import Card from "./components/card/Card";

function GeneralManagement() {
  return (
    <section className="container bg-secondary">
        <div className="row mb-3">
            <div className="col">
                <h4 className="title-h4">Gestão Geral</h4>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-4">
                <Card 
                    title={'Período Lectivo'}
                    description={'Defina o período lectivo actual da instituíção, o edite ou o finalize.'}
                    url={'/dashboard/periods'}
                />
            </div>
            <div className="col-lg-4 col-md-4">
                <Card 
                    title={'Sala'}
                    description={'Crie edite as salas onde serão realizadas as aulas da instituíção.'}
                    url={'/dashboard/classes'}
                />
            </div>
            <div className="col-lg-4 col-md-4">
                <Card 
                    title={'Curso'}
                    description={'Crie os cursos que serão ofericidos aos alunos.'}
                    url={'/dashboard/course'}
                />
            </div>
        </div>
        <div className="row my-4">
            <div className="col-lg-4 col-md-4">
                    <Card 
                        title={'Disciplina'}
                        description={'Crie as disciplinas que serão ministradas pelos professores.'}
                        url={'/dashboard/lessons'}
                    />
            </div>
            <div className="col-lg-4 col-md-4">
                    <Card 
                        title={'Turma'}
                        description={'Adicione uma nova turma ao seu período lectivo.'}
                        url={'/dashboard/room'}
                    />
            </div>
        </div>
    </section>);
}

export { GeneralManagement };
