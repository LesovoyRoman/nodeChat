/**
 * Import Favs
 */
import favStandart from './images/fav.png'
import favNewMessage from './images/alert.png'

/**
 * Import Audio
 */
import alertVoice from './files/audio/message-alert.wav'

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
    API_REQ = DOMAIN + ':' + API_PORT,

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
    ALERT_VOICE = alertVoice;