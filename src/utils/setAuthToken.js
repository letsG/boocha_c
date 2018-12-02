import {setStorageItem} from './localStorage';
import axios from 'axios';

const setAuthToken = (token) => {
    if (token) {
        setStorageItem('access_token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        localStorage.removeItem('access_token');
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken