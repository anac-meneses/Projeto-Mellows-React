import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LivroService from "../../services/LivroService";
import UsuarioService from "../../services/UsuarioService";

export default function Create() {

    const [nome, setNome] = useState("");
    const [autor, setAutor] = useState("");
    const [genero, setGenero] = useState("");
    const [usuario, setUsuario] = useState({ id: "", nome: "" });
    const [usuarios, setUsuarios] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    const getAllUsuario = () => {
        UsuarioService.getAllUsuario()
            .then((response) => {
                setUsuarios(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllUsuario();
    }, []);

    const criarOuEditarLivro = (e) => {
        e.preventDefault();

        const livro = { nome, autor, genero, usuario };

        if (id) {
            // update
            LivroService.updateLivro(id, livro)
                .then((response) => {
                    navigate("/livros");
                })
        } else {
            LivroService.createLivro(livro).then((response) => {
                navigate("/livros");
            });
        }
    };

    useEffect(() => {
        function getLivroById() {
            if (id) {
                LivroService.getLivroById(id)
                    .then((response) => {
                        let db = response.data;
                        setNome(db.nome);
                        setAutor(db.autor);
                        setGenero(db.genero);
                        setUsuario({
                            id: db.usuario.id,
                            nome: db.usuario.nome,
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        }
        getLivroById()
    }, [id]);

    return (
        <div className="container py-3 col-12 col-md-6" id="bodyAdmin">
            <form>
                <h2 className="text-center pt-3">{id ? "Editar" : "Cadastrar"} livro</h2>

                <div className="form-group mb-3">
                    <label htmlFor="nome" className="form-label"> Nome</label> <input
                        type="text" id="nome" name="nome" value={nome}
                        onChange={(e) => setNome(e.target.value)} className="form-control" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="autor" className="form-label"> Autor</label> <input
                        type="text" id="autor" name="autor" value={autor}
                        onChange={(e) => setAutor(e.target.value)} className="form-control" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="genero" className="form-label"> Gênero</label> <input
                        type="text" id="genero" name="genero" value={genero}
                        onChange={(e) => setGenero(e.target.value)} className="form-control" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="usuario" className="form-label"> Usuario </label> <select
                        className="form-select form-select-sm" aria-label=".form-select-sm example" id="usuario"
                        name="usuario"
                        onChange={(e) =>
                            setUsuario({ id: Number.parseInt(e.target.value) })
                        }>
                        <option value="DEFAULT" >Nome do usuário</option>
                        {usuarios.map((usuario) => (
                            <option key={usuario.id} value={usuario.id}>
                                {usuario.nome}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn" id="btnAdmin" onClick={(e) => criarOuEditarLivro(e)}>Enviar</button>
                <Link to="/livros" className="btn" id="btnAdmin" style={{ marginLeft: "10px" }}>
                    Cancelar </Link>
            </form>
        </div>
    );
}