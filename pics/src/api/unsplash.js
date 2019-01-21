import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID fe9948d0f2a336190bfc68cc6c9974d5a492ddb9f02bc47f59aee775f116ecbb'
    }
});
