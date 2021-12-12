import axios from 'axios';
const endpoint='https://localhost:44351/api/ric/';
export default {
    
    update: async (ric) => {
        const response = await axios.put(endpoint+UpdateRicStatus+'/'+ric);
        return response.data
    },
}