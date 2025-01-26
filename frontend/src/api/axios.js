import axios from 'axios';


// Define your API endpoint

const instance = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 3000,
    headers: {'X-Custom-Header': 'foobar'}
  });


  export default instance;