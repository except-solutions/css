require('dotenv').config();

const ProxyAgent = require('proxy-agent');

module.exports = () => {
  return ProxyAgent(process.env.PROXY_URI);
};
