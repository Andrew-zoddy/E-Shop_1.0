import axios from "axios";

//Users Endpoints
export const usersAPI = {
    // getting users
    getUsers() {
        return axios.get('https://fakestoreapi.com/users')
            .then(response => response)
    }
};