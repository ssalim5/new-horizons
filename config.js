const dotenv = require('dotenv');
const _ = require('lodash')

const envConfig = dotenv.config()
// console.log(envConfig)
let envs
if( envConfig ){
  envs = envConfig.parsed
} else {
  envs = {}
  _.each( process.env, (value, key) => envs[key] = value )
}

const envKeys = Object.keys(envs).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(envs[next]);
  return prev;
}, {});

module.exports = envKeys
