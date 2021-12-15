import axios from 'axios';
const endpoint='https://localhost:44351/api/permits/';
export default {
   

    get: async function(id) {
        const response = await axios.get(endpoint+ 'get/'+id);
        return response.data
    },

    save: async function(paload){
         const response = await axios.put(endpoint+ 'update', paload);
         return response.data
    },

    split: async payload =>{
        ///api/permits/split/
        const response = await axios.post(endpoint+'split',payload);
        return response.data
    },

    splitAndSave: async payload =>{
        ///api/permits/split/
        const response = await axios.post(endpoint+'splitAndSave',payload);
        return response.data
    }
}
