const CONFIG = require('./config')

module.exports = {
    DB: 'mongodb://' + CONFIG.DOMAIN + ':' + CONFIG.DB_PORT + '/' + CONFIG.DB_NAME
}