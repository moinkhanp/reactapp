import axios from 'axios';
// const baseURL = 'https://mongofetchapi.herokuapp.com';
const baseURL = 'https://localhost:8001'

export const getUsers = async () => {
    
    return await axios.get(`${baseURL}/getuser`);
}   