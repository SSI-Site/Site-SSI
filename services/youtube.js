import axios from 'axios';

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
const CHANNEL_ID = 'UCGpuqrzN2VKKT5kNoOfKiog'

export default {

    getLiveStreamData: async () => {
        try {
            const config = {
                params: {
                    part: 'snippet',
                    channelId: CHANNEL_ID,
                    eventType: 'live',
                    type: 'video',
                    key: YOUTUBE_API_KEY,
                }
            }

            const res = await axios.get('https://www.googleapis.com/youtube/v3/search', config)

            if (res.data.items && res.data.items.length > 0) {
                return `https://www.youtube.com/watch?v=${res.data.items[0].id.videoId}`
            } else {
                return `https://www.youtube.com/channel/${CHANNEL_ID}`
            }
        } catch (error) {
            console.error('Erro ao buscar dados da live: ', error)
            return `https://www.youtube.com/channel/${CHANNEL_ID}`
        }
    }
}