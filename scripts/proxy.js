require('dotenv').config();
const HttpsProxyAgent = require('https-proxy-agent');
const SocksAgent = require('socks5-https-client/lib/Agent');

module.exports = () => {
  if (process.env.PROXY_URI.startsWith('http')) {
    return new HttpsProxyAgent(process.env.PROXY_URI);
  } else {
    return new SocksAgent({
      // Must be defined:
      socksHost: process.env.PROXY_URI,
      socksPort: process.env.PROXY_PORT,
      socksUsername: process.env.PROXY_LOGIN,
      socksPassword: process.env.PROXY_PASSWORD,
    });
  }
};
