import axios from "axios";

const USUARIO_API_URL = "http://localhost:8080/usuarios";


class UsuarioService {
    // get all
    getAllUsuario() {
        return axios.get(USUARIO_API_URL);
    }
    // create
    createUsuario(usuario) {
    return axios.post(USUARIO_API_URL, usuario);
    }
    // get id
    getUsuarioById(id) {
        return axios.get(USUARIO_API_URL + "/" + id);
    }
    // update
    updateUsuario(id, usuario) {
        return axios.put(USUARIO_API_URL + "/" + id, usuario);
    }
    // delete
    deleteUsuario(id) {
        return axios.delete(USUARIO_API_URL + "/" + id);
    }
}

export default new UsuarioService();