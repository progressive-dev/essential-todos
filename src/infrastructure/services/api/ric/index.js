import axios from 'axios';
const endpoint='https://localhost:44351/api/projects/';
export default {
    
    updateStatus: async (ric) => {
        const response = await axios.put(endpoint+'UpdateRicStatus/',ric);
        return response.data
    },
}