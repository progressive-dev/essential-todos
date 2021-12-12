import axios from 'axios';
const endpoint='https://localhost:44351/api/projects/';
export default {
   
    getAll: async () => {
        const response = await axios.get(endpoint+'all');
        return response.data
    },
    get: async function(id) {
        const response = await axios.get(endpoint+ 'Get/'+id);
        return response.data
    },

    save: async function(data){
         const response = await axios.put(endpoint+ 'update', data);
         return response.data
    },

    getRic:async function(projectid) {
        const response = await axios.get(endpoint+ 'GetRic/'+projectid);
        return response.data
    },
}

