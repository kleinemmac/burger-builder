import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-d6d4a.firebaseio.com/'
});

export default instance;