import axios from 'axios';
import {apiUrl} from './baseUrl';

export const getAllUsersApi = () => axios.get(apiUrl + '/secret/allUsers');

export const getUserByIdApi = (id) => axios.get(apiUrl + '/secret/userById/' + id);

export const createUserApi = (data) => axios.get(apiUrl + '/secret/signup', data)

// in this place we make request to some api
// it need only for worker saga