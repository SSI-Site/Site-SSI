import axios from 'axios';

const TWITCH_API_URL = "https://api.twitch.tv/helix"
const SSI_CHANEL_ID = 523344753;

const getAuthToken = async () => {
    const params = {
        client_id: process.env.NEXT_PUBLIC_TWITCH_CLIENT,
        client_secret: process.env.NEXT_PUBLIC_TWITCH_SECRET,
        grant_type: "client_credentials"
    }

    const res = await axios.post("https://id.twitch.tv/oauth2/token", params);
    return res.data.access_token;
}

export default {

    getStreamData: async () => {
        const authToken = await getAuthToken();

        const config = {
            headers: {
                "Client-ID": process.env.NEXT_PUBLIC_TWITCH_CLIENT,
                "Authorization": `Bearer ${authToken}`
            },
            params: {
                "user_id": SSI_CHANEL_ID
            }
        }

        return axios.get(`${TWITCH_API_URL}/streams`, config);
    }
};