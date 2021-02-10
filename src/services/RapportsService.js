import axios from 'axios';
const URL = "http://localhost:8080/";
//const token = localStorage.getItem('token')
const token = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiUk9MRV9FVFVESUFOVCIsInN1YiI6InJhYmFiQGdtYWlsLmNvbSIsImV4cCI6MTYxMjg1NjA2NSwiaWF0IjoxNjEyODIwMDY1fQ.9AN32afKb49niQJC3w7-E9Wu6uKsuu2N7tw34LX9f4Y";
const header = {
    headers : {
        'Access-Control-Allow-Origin': 'http://localhost:3000/gestionProjet/rapport',
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : undefined
    }
}

class RapportsService{
    getAllRapportsArchive(){
        return axios.get(URL,header);
    }

}

export default new RapportsService()