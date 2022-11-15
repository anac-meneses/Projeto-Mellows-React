import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LiService from "../../services/LiService";

import '../../styles/home.css';

export default function Index() {
    const [li, setLi] = useState([]);

    const getAllLi = () => {
        LiService.getAllLi()
            .then((response) => {
                setLi(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllLi();
    }, []);

    const deleteLi = (id) => {
        LiService.deleteLi(id)
            .then((response) => {
                getAllLi();
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
                        <Link to="/livro-interativo-cadastrar" className="btn mb-2 botao1"
                            style={{ backgroundColor: "#c9c6f3ed" }}
                        > Novo Livro interativo</Link>
                    </div>

                    <table className="table table-responsive table-hover">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Autor</th>
                                <th scope="col">Gênero</th>
                                <th scope="col">Nível</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>

                            {li.map((li) => (
                                <tr key={li.id}>
                                    <td>{li.id}</td>
                                    <td>{li.nome}</td>
                                    <td>{li.autor}</td>
                                    <td>{li.genero}</td>
                                    <td>{li.nivel}</td>
                                    <td>
                                        <div className="d-flex">
                                            <Link to={`/livro-interativo-editar/${li.id}`}
                                                className="btn btn-primary" title="Editar"> Editar <i className="ri-file-edit-line"></i>
                                            </Link>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => deleteLi(li.id)}
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