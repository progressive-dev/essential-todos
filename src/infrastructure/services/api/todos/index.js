import axios from 'axios';

export default {
    getAll: async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

        return response.data
    }
}