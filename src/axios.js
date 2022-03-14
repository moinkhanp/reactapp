import axios from 'axios';


export const getUsers = async (page) => {
    //  return await axios.get(`${baseURL}/getuser/?page=${page}`);
    
    return await axios.get(`https://mongofetchapi.herokuapp.com/getuser?page=${page}`)
}      

