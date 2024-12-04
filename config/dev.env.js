'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_NAME:'"development"',
  API_ROOT:'"/api"',
  API_SOOT:'"/shop"'
})
