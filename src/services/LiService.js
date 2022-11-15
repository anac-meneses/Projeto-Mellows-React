import axios from "axios";

const LI_API_URL = "http://localhost:8080/livros-interativos";


class LiService {
    // get all
    getAllLi() {
        return axios.get(LI_API_URL);
    }
    // create
    createLi(li) {
    return axios.post(LI_API_URL, li);
    }
    // get id
    getLiById(id) {
        return axios.get(LI_API_URL + "/" + id);
    }
    // update
    updateLi(id, li) {
        return axios.put(LI_API_URL + "/" + id, li);
    }
    // delete
    deleteLi(id) {
        return axios.delete(LI_API_URL + "/" + id);
    }
}

export default new LiService();