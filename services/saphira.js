import axios from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_SAPHIRA_URL;
const base_url = 'http://www.boredapi.com/api/activity'; // para o exemplo -> APAGAR

const saphira = {

    // Para o exemplo 
    getActivity: async () => {
        try {
            const response = await axios.get(base_url);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }, // -> APAGAR

    registerUser: async (userData) => {
        const requestUrl = BASE_URL + "/user/add";

        const params = {
            full_name: userData.fullName,
            email: userData.email,
            document: userData.document,
            data_nascimento: userData.birthDate,
            genero: userData.gender,
            etnia: userData.ethnicity,
            curso: userData.course,
            periodo_curso: userData.graduationPeriod,
            como_conheceu: userData.knowAbout,
            em_estagio: userData.isInInternship,
            aceita_receber_email: userData.acceptedRecieveEmails
        };

        return axios.get(requestUrl, { params });
    },

    updateUser: async (userData) => {
        const requestUrl = `${BASE_URL}/user/${userData.email}/edit`

        const params = {
            full_name: userData.fullName,
            email: userData.email,
            document: userData.document,
            data_nascimento: userData.birthDate,
            genero: userData.gender,
            etnia: userData.ethnicity,
            curso: userData.course,
            periodo_curso: userData.graduationPeriod,
            como_conheceu: userData.knowAbout,
            em_estagio: userData.isInInternship,
            aceita_receber_email: userData.acceptedRecieveEmails
        };

        return axios.get(requestUrl, { params });
    },

    getUser: async (email) => {
        const requestUrl = `${BASE_URL}/user/${email}`
        return axios.get(requestUrl);
    },

    registerPresence: async (email, token) => {
        const requestUrl = `${BASE_URL}/user/${email}/presence/add`;

        const params = {
          token: token
        };

        return axios.get(requestUrl, { params });
    },

    listPresences: async (email) => {
        const requestUrl = `${BASE_URL}/user/${email}/presences`;

        return axios.get(requestUrl);
    },

    testTimeout: async () => new Promise(resolve => setTimeout(resolve, 3000)),
}

export default saphira;