'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SERVER_ADDRESS: '"192.168.99.100:8080"',
  USE_MOCKS: false
})
