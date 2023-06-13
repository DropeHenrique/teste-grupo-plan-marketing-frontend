import axios from 'axios';

const actions = {
    async fetchAppliances({ commit }) {
        try {
            const response = await axios.get('/api/appliances');
            const appliances = response.data;
            commit('SET_APPLIANCES', appliances);
        } catch (error) {
            console.error(error);
        }
    },
    // Outras ações...
};

export default actions;
