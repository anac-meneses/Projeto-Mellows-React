import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginService from "../../services/LoginService";

export default function Index() {
    const [login, setLogin] = useState([]);

    const getAllLogin = () => {
        LoginService.getAllLogin()
            .then((response) => {
                setLogin(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllLogin();
    }, []);

    const deleteLogin = (id) => {
        LoginService.deleteLogin(id)
            .then((response) => {
                getAllLogin();
            })
            .catch((error) => {
                console.log(error);
                const { data } = error.response;
                if (data.status === 500) {
                    alert("Erro na API");
                }
            });
    };

    return (
        <>
            <section className="container " id="bodyAdmin">

                <ul class="nav justify-content-center pt-4">
                    <li class="nav-item">
                        <Link to="/usuarios" class="nav-link" aria-current="page" style={{ color: 'black' }}>Usuários</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/login" class="nav-link" style={{ color: 'black' }}>Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/livros" class="nav-link" style={{ color: 'black' }}>Livros </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/livros-interativos" class="nav-link" style={{ color: 'black' }}>Livros Interativos</Link>
                    </li>
                </ul>

                <div className="p-4">
                    <div className="row justify-content-center mt-4">
                        <Link to="/login-cadastrar" className="btn mb-2 botao1"
                            style={{ backgroundColor: '#c9c6f3ed' }}
                        > Novo Login</Link>
                    </div>

                    <table className="table table-responsive table-hover">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Tipo</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>

                            {login.map((login) => (
                                <tr key={login.id}>
                                    <td>{login.id}</td>
                                    <td>{login.tipoLogin}</td>
                                    <td>
                                        <div className="d-flex">
                                            <Link to={`/login-editar/${login.id}`}
                                                className="btn btn-primary" title="Editar"> Editar <i className="ri-file-edit-line"></i>
                                            </Link>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => deleteLogin(login.id)}
                                                style={{ marginLeft: "10px" }}
                                            >
                                                Deletar
                                            </button>

                                        </div>
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>

                </div>
            </section>
        </>
    )

}