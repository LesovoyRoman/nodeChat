/**
 * Import Favs
 */
import favStandart from './images/fav.png'
import favNewMessage from './images/alert.png'

/**
 * Import Audio
 */
import alertVoice from './files/audio/sweet-alert.wav'

export const
    /**
     * App
     */
    PROD_ENV = 'production',
    DEV_ENV = 'development',
    APP_ENV = DEV_ENV,

    /**
     * API
     */
    API_PORT = 7777,
    DOMAIN = 'http://localhost',

    /**
     * GraphQL API
     */
    GRAPH_QL_URL = '/api-graphql',
    GRAPH_QL = true,

    /**
     * Request endpoint
     */
    ENDPOINT = DOMAIN + ':' + API_PORT,
    API_REQ = GRAPH_QL ? ENDPOINT + GRAPH_QL_URL : ENDPOINT,

    /**
     * Favs
     */
    FAV_STANDART = favStandart,
    FAV_NEW_MESSAGE = favNewMessage,

    /**
     * Types
     */
    GIF_TYPE = 'gif',
    SVG_TYPE = 'svg',
    PNG_TYPE = 'png',

    /**
     * Audio
     */
    ALERT_VOICE = alertVoice,

    /**
     * Socket events
     */
    NEW_MESSAGE_EVENT = 'message',
    NEW_CHAT_ROOM_EVENT = 'chatRoom'; 

    