import axios from 'axios';

export default {
    getAll: async () => {
        const response = await axios.get('https://localhost:44351/api/Companies/All');
        return response.data
    }


}