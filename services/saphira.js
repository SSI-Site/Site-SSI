import axios from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_SAPHIRA_URL;
import cookie from 'js-cookie';

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.baseURL = BASE_URL

axios.interceptors.request.use((config) => {
    const csrfToken = cookie.get('csrftoken');
    if (csrfToken) {
        config.headers['X-CSRFToken'] = csrfToken;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
const saphira = {
    // Para o exemplo -> COMENTAR
    getActivity: async () => {
        try {
            const response = await axios.get(base_url);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    },

    // Função auxiliar - obtém o token de acesso
    getAccessToken: async () => {

        let accessToken = localStorage.getItem(ACCESS_TOKEN);
        // console.log('accessToken', accessToken);

        // Se o token de acesso não existe ou está expirado, renova o token
        if (!accessToken || saphira.isTokenExpired(accessToken)) {
            const refreshToken = localStorage.getItem(REFRESH_TOKEN);
            // console.log('o refreshToken é', refreshToken);

            if (!refreshToken) {
                console.error('Refresh token não encontrado. Faça login novamente.');
                return null;
            }

            try {
                const response = await axios.post(`${API_BASE_URL}/api/token/refresh`, {
                    refresh: refreshToken,
                });
                accessToken = response.data.access;
                localStorage.setItem(ACCESS_TOKEN, accessToken);
                return accessToken;
            } catch (error) {
                console.error('Erro ao renovar token:', error);
            }
        }

        return accessToken;
    },

    // Função auxiliar - verifica se o token está expirado
    isTokenExpired: (token) => {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const expirationTime = payload.exp * 1000;
        return Date.now() >= expirationTime;
    },

    // Requisição autenticada: Atualizar estudante
    updateStudent: async (usp_number) => {
        const accessToken = await saphira.getAccessToken();
        const studentId = localStorage.getItem(STUDENT_ID);
        const requestUrl = `${API_BASE_URL}/student/${studentId}`;

        const params = {
            usp_number
        };

        return axios.put(requestUrl, params, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
    },

    // Requisição autenticada: Obter dados do estudante
    getStudent: async () => {
        const accessToken = await saphira.getAccessToken();
        const studentId = localStorage.getItem(STUDENT_ID);
        const requestUrl = `${API_BASE_URL}/student/${studentId}`;

        return axios.get(requestUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
    },

    // Requisição autenticada: Registrar presença online
    registerOnlinePresence: async (token_code) => {
        const accessToken = await saphira.getAccessToken();
        const studentId = localStorage.getItem(STUDENT_ID);
        const requestUrl = `${API_BASE_URL}/student/${studentId}/presence`;

        const params = {
            token_code
        };

        return axios.post(requestUrl, params, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
    },

    // Requisição autenticada: Listar presenças do estudante
    listStudentPresences: async () => {
        const accessToken = await saphira.getAccessToken();
        const studentId = localStorage.getItem(STUDENT_ID);
        const requestUrl = `${API_BASE_URL}/student/${studentId}/presences`;

        return axios.get(requestUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
    },

    getGifts: async() => {
        const requestUrl = '/gifts/'
        return await axios.get('/gifts/',
            requestUrl
        )
    },

};

export default saphira;