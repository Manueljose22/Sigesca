import Card from "./components/card/Card";

function GeneralManagement() {
    return (
        <section className="container-fluid bg-secondary h-100">
            <div className="row mb-3">
                <div className="col">
                    <h4 className="title-h4">Gestão Geral</h4>
                </div>
            </div>
            <div className="row gap-2 align-items-center">
                <div className="col-lg-4 col-md-4">
                    <Card
                        title={'Período Lectivo'}
                        description={'Defina o período lectivo actual da instituíção, o edite ou o finalize.'}
                        url={'/admin/gestao/períodos'}
                    />
                </div>
                <div className="col-lg-3 col-md-4">
                    <Card
                        title={'Sala'}
                        description={'Crie edite as salas onde serão realizadas as aulas da instituíção.'}
                        url={'/admin/gestao/salas'}
                    />
                </div>
                <div className="col-lg-3 col-md-4">
                    <Card
                        title={'Curso'}
                        description={'Crie os cursos que serão ofericidos aos alunos.'}
                        url={'/admin/gestao/cursos'}
                    />
                </div>
            </div>
            <div className="row my-4 gap-3">
                <div className="col-lg-5 col-md-6">
                    <Card
                        title={'Disciplina'}
                        description={'Crie as disciplinas que serão ministradas pelos professores.'}
                        url={'/admin/gestao/disciplinas'}
                    />
                </div>
                <div className="col-lg-5 col-md-6">
                    <Card
                        title={'Turma'}
                        description={'Adicione uma nova turma ao seu período lectivo.'}
                        url={'/admin/gestao/turmas'}
                    />
                </div>
            </div>
        </section>);
}

export { GeneralManagement };
