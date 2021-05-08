const {logger} = require('../middle-wares/logger');
const {authentication} = require('../middle-wares/authentications');

module.exports = {logger, authentication};