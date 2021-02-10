import axios from 'axios';
const URL = "http://localhost:8080/gestionProjet/structure/";
//const token = localStorage.getItem('token')
const token = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiUk9MRV9BRE1JTiIsInN1YiI6ImFkbWluQGdtYWlsLmNvbSIsImV4cCI6MTYxMzAyMDE2NCwiaWF0IjoxNjEyOTg0MTY0fQ.0Vu2hD-SnSxRUkmv1Mh8m3Z3zLltPINB9IB9Mtl8T18";
const header = {
    headers : {
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : undefined
    }
}

class SAService{
    getAllSA(){
        console.log(axios.get(URL,header));
        return axios.get(URL,header);
    }

}

export default new SAService()