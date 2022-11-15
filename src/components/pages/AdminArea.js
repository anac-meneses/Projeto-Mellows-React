import { Link } from 'react-router-dom';

import '../../styles/home.css';


function AdminArea() {
    return (
        <>
            <section id='body'>
                <div className="container" id='cardAdmin'>
                    <div className=" p-3 text-secondary rounded text-center">
                        <h2>Área do administrador</h2>
                        <p>Clique nos cards para consultas ou edições</p>
                    </div>

                    <div className="row row-cols-auto justify-content-around">
                        <div className="card my-3" id="tamanho">
                            <div className="card-body text-center" id='usuario'>
                                <h5 className="card-title">Usuário</h5>
                                <p className="card-text">Editar ou consultar a tabela de usuários.</p>
                                <Link to="/usuarios" className="btn btn-outline-dark">Consultar</Link>
                            </div>
                        </div>

                        <div className="card my-3" id="tamanho">
                            <div className="card-body text-center" id='login'>
                                <h5 className="card-title">Login</h5>
                                <p className="card-text">Editar ou consultar a tabela de login.</p>
                                <Link to="/login" className="btn btn-outline-dark">Consultar</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-auto justify-content-around">
                        <div className="card my-3" id="tamanho">
                            <div className="card-body text-center" id='livrosInt'>
                                <h5 className="card-title">Livros Interativos</h5>
                                <p className="card-text">Editar ou consultar a tabela de L.interativos.</p>
                                <Link to="/livros-interativos" className="btn btn-outline-dark">Consultar</Link>
                            </div>
                        </div>

                        <div className="card my-3" id="tamanho">
                            <div className="card-body text-center" id='livros'>
                                <h5 className="card-title">Livros</h5>
                                <p className="card-text">Editar ou consultar a tabela de livros.</p>
                                <Link to="/livros" className="btn btn-outline-dark">Consultar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AdminArea;