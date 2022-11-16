import axios from "axios";

const LIVRO_API_URL = "http://localhost:8080/livros";


class LivroService {
    // get all
    getAllLivro() {
        return axios.get(LIVRO_API_URL);
    }
    // create
    createLivro(livro) {
    return axios.post(LIVRO_API_URL, livro);
    }
    // get id
    getLivroById(id) {
        return axios.get(LIVRO_API_URL + "/" + id);
    }
    // update
    updateLivro(id, livro) {
        return axios.put(LIVRO_API_URL + "/" + id, livro);
    }
    // delete
    deleteLivro(id) {
        return axios.delete(LIVRO_API_URL + "/" + id);
    }
}

export default new LivroService();