const path = require('path')
const Redis = require('ioredis')

const redisConfig = {
  host: 'localhost',
  port: 6379,
  password: 'explorer',
  db: 0
}

exports.keys = 'bitstashinfo-api'

exports.security = {
  csrf: {enable: false}
}

exports.middleware = ['ratelimit']

exports.redis = {
  client: redisConfig
}

exports.security = {
    domainWhiteList: ['https://explore.bitstash.co']  // CORS whitelist sites
}
// or
exports.cors = {
    origin: '*'  // Access-Control-Allow-Origin: *
}

exports.sequelize = {
    logging: false  // disable sql logging
}


exports.ratelimit = {
  db: new Redis(redisConfig),
  headers: {
    remaining: 'Rate-Limit-Remaining',
    reset: 'Rate-Limit-Reset',
    total: 'Rate-Limit-Total',
  },
  disableHeader: false,
  errorMessage: 'Rate Limit Exceeded',
  duration: 10 * 60 * 1000,
  max: 10 * 60
}

exports.io = {
  redis: {
    ...redisConfig,
    key: 'bitstashinfo-api-socket.io'
  },
  namespace: {
    '/': {connectionMiddleware: ['connection']}
  }
}

exports.sequelize = {
  dialect: 'mysql',
  database: 'bitstash',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Root1234'
}

exports.bitstash = {
  chain: 'mainnet'
}

exports.bitstashinfo = {
  path: path.resolve('..', 'bitstashinfo'),
  port: 3001,
  rpc: {
    protocol: 'http',
    host: 'localhost',
    port: 3889,
    user: 'explorer',
    password: 'explorer123'
  }
}

exports.cmcAPIKey = null
