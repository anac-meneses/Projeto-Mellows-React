import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UsuarioService from "../../services/UsuarioService";
import LoginService from "../../services/LoginService";

export default function Create() {

    const [nome, setNome] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [login, setLogin] = useState({ id: "", tipoLogin: "" });
    const [loginn, setLoginn] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    const getAllLogin = () => {
        LoginService.getAllLogin()
            .then((response) => {
                setLoginn(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllLogin();
    }, []);

    const criarOuEditarUsuario = (e) => {
        e.preventDefault();

        const usuario = { nome, dataNascimento, email, senha, login };

        if (id) {
            // update
            UsuarioService.updateUsuario(id, usuario)
                .then((response) => {
                    navigate("/usuarios");
                })
        } else {
            UsuarioService.createUsuario(usuario).then((response) => {
                navigate("/usuarios");
            });
        }
    };

    useEffect(() => {
        function getUsuarioById() {
            if (id) {
                UsuarioService.getUsuarioById(id)
                    .then((response) => {
                        let db = response.data;
                        setNome(db.nome);
                        setDataNascimento(db.dataNascimento);
                        setEmail(db.email);
                        setSenha(db.senha);
                        setLogin({
                            id: db.login.id,
                            tipo: db.login.tipoLogin,
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        }
        getUsuarioById()
    }, [id]);

    return (
        <div className="container py-3 col-12 col-md-6" id="bodyAdmin">
            <form>
                <h2 className="text-center pt-3">{id ? "Editar" : "Cadastrar"} usuário</h2>

                <div className="form-group mb-3">
                    <label htmlFor="nome" className="form-label"> Nome</label> <input
                        type="text" id="nome" name="nome" value={nome}
                        onChange={(e) => setNome(e.target.value)} className="form-control" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="dataNascimento" className="form-label"> Data de nascimento</label> <input
                        type="date" id="dataNascimento" name="dataNascimento" value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)} className="form-control" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label"> Email</label> <input
                        type="email" id="email" name="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} className="form-control" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="senha" className="form-label"> Senha</label> <input
                        type="password" id="senha" name="senha" value={senha}
                        onChange={(e) => setSenha(e.target.value)} className="form-control" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="login" className="form-label"> Tipo de Login </label> <select
                        className="form-select form-select-sm" aria-label=".form-select-sm example" id="login"
                        name="login"
                        onChange={(e) =>
                            setLogin({ id: Number.parseInt(e.target.value) })
                        }>
                        <option value="DEFAULT">Escolha um tipo de permissão</option>
                        {loginn.map((login) => (
                            <option key={login.id} value={login.id}>
                                {login.tipoLogin}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn" id="btnAdmin" onClick={(e) => criarOuEditarUsuario(e)}>Enviar</button>
                <Link to="/usuarios" className="btn" id="btnAdmin" style={{ marginLeft: "10px" }}>
                    Cancelar </Link>
            </form>
        </div>
    );
}