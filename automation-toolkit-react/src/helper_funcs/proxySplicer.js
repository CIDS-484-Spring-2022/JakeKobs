function ProxySplicer(proxy) {
  let splitProxy = proxy.split(":");
  return {
    proxyServer: splitProxy[0] + ":" + splitProxy[1],
    proxyUsername: splitProxy[2],
    proxyPassword: splitProxy[3],
  };
}

module.exports = ProxySplicer;
