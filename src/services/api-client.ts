import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'691b916a376b42a98749c84e2b385b27',
    }
})