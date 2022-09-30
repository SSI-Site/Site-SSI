import axios from 'axios';
const base_url = 'https://catfact.ninja/fact';

const saphira = {

  getCatFact: async () => {

    try {
      const response = await axios.get(base_url);
      return response.data;
    } catch (err) {
      console.log(err);
    }

  },

  watchNowTwitch: async () => { },

  sendToken: async parameters => {
    const { token, user_id } = parameters;

  }

}

export default saphira;
