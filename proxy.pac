function FindProxyForURL(url, host) {
  if (isPlainHostName(host)) { return "DIRECT"; }
  var exact = ["securly.com"];
  for (var j = 0; j < exact.length; j++) {
    if (host === exact[j]) {
      return "PROXY proxy.protoweb.org:7851; DIRECT";
    }
  }
  var wildcards = ["*.securly.com"];
  for (var k = 0; k < wildcards.length; k++) {
    if (shExpMatch(host, wildcards[k]) || shExpMatch(url, wildcards[k])) {
      return "PROXY proxy.protoweb.org:7851; DIRECT";
    }
  }
  return "DIRECT";
}