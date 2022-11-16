import axios from "axios";

const LOGIN_API_URL = "http://localhost:8080/login";


class LoginService {
    // get all
    getAllLogin() {
        return axios.get(LOGIN_API_URL);
    }
    // create
    createLogin(login) {
    return axios.post(LOGIN_API_URL, login);
    }
    // get id
    getLoginById(id) {
        return axios.get(LOGIN_API_URL + "/" + id);
    }
    // update
    updateLogin(id, login) {
        return axios.put(LOGIN_API_URL + "/" + id, login);
    }
    // delete
    deleteLogin(id) {
        return axios.delete(LOGIN_API_URL + "/" + id);
    }
}

export default new LoginService();