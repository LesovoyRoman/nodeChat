const CONFIG = require('./config')

module.exports = {
    DB: 'mongodb://' + CONFIG.DB_HOSTNAME + ':' + CONFIG.DB_PORT + '/' + CONFIG.DB_NAME
}