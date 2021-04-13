import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID _A0845bhC0KvZVWLnYX7BxopshCcvbdGIC7zO0hUQ1w'
    }

})
