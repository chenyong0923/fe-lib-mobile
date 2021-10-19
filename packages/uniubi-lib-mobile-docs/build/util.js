const path = require('path');
const url = require('url');
const os = require('os');

// 标准化 family：IPv4 或 IPv6
function _normalizeFamily(family) {
  return family ? family.toLowerCase() : 'ipv4';
}

// 获取项目根路径
exports.getProjectRoot = function () {
  return path.resolve(__dirname, '..');
};

// 根据互联网协议返回 ip 地址
exports.loopback = function loopback(family) {
  // 获取网络接口的互联网协议，默认 ‘ipv4‘
  family = _normalizeFamily(family);

  // family 只允许为 ipv4 or ipv6
  if (family !== 'ipv4' && family !== 'ipv6') {
    throw new Error('family must be ipv4 or ipv6');
  }

  return family === 'ipv4' ? '127.0.0.1' : 'fe80::1';
};

// 是否为回环，路由器里面的一个逻辑接口
exports.isLoopback = function isLoopback(addr) {
  return (
    /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/.test(addr) ||
    /^fe80::1$/.test(addr) ||
    /^::1$/.test(addr) ||
    /^::$/.test(addr)
  );
};

// 是否为私有IP
exports.isPrivate = function isPrivate(addr) {
  return (
    /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/.test(addr) ||
    /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/.test(addr) ||
    /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/.test(
      addr,
    ) ||
    /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/.test(addr) ||
    /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/.test(addr) ||
    /^fc00:/i.test(addr) ||
    /^fe80:/i.test(addr) ||
    /^::1$/.test(addr) ||
    /^::$/.test(addr)
  );
};

// 是否为公网IP
exports.isPublic = function isPublic(addr) {
  return !exports.isPrivate(addr);
};

// 获取本地 ip 地址
exports.getLocalIp = function (name, family) {
  // 获取包含已分配网络地址的网络接口的对象
  const interfaces = os.networkInterfaces();
  // 获取网络接口的互联网协议，默认 ‘ipv4‘
  family = _normalizeFamily(family);

  // 如果网络接口被指明那么获取对应的网络地址 address
  if (name && name !== 'private' && name !== 'public') {
    const res = interfaces[name].filter((details) => {
      const itemFamily = details.family.toLowerCase();
      return itemFamily === family;
    });
    if (res.length === 0) {
      return undefined;
    }
    return res[0].address;
  }

  // 筛选出将系统获取到所有接口中的 address
  const all = Object.keys(interfaces)
    .map((nic) => {
      //
      // Note: name will only be `public` or `private`
      // when this is called.
      //
      const addresses = interfaces[nic].filter((details) => {
        details.family = details.family.toLowerCase();
        if (details.family !== family || exports.isLoopback(details.address)) {
          return false;
        } else if (!name) {
          return true;
        }

        return name === 'public'
          ? !exports.isPrivate(details.address)
          : exports.isPrivate(details.address);
      });
      return addresses.length ? addresses[0].address : undefined;
    })
    .filter(Boolean);

  return !all.length ? exports.loopback(family) : all[0];
};

// 是
exports.prepareUrls = function (protocol, host, port) {
  // 通过 hostname 对传入的 url 信息进行拼接
  const formatUrl = (hostname) =>
    url.format({
      protocol,
      hostname,
      port,
      pathname: '/',
    });

  // host 是否未指明
  const isUnspecifiedHost = host === '0.0.0.0' || host === '::';
  let prettyHost;
  let lanUrlForConfig;
  let lanUrlForTerminal;
  // 如果未指明具体 ip 地址，则通过系统读取
  if (isUnspecifiedHost) {
    prettyHost = 'localhost';
    try {
      lanUrlForConfig = exports.getLocalIp();
      if (lanUrlForConfig) {
        if (exports.isPrivate(lanUrlForConfig)) {
          lanUrlForTerminal = formatUrl(lanUrlForConfig);
        } else {
          lanUrlForConfig = undefined;
        }
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    prettyHost = host;
  }
  const localUrlForTerminal = formatUrl(prettyHost);
  const localUrlForBrowser = formatUrl(prettyHost);
  return {
    lanUrlForConfig,
    lanUrlForTerminal,
    localUrlForTerminal,
    localUrlForBrowser,
  };
};

// 补零
exports.zeroPad = function (num, places) {
  const zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join('0') + num;
};

// 格式化时间，不足10补零，默认使用当前时间
exports.formatTime = function (date) {
  if (!date) {
    date = new Date();
  } else if (!(date instanceof Date)) {
    date = new Date(date);
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${year}-${exports.zeroPad(month, 2)}-${exports.zeroPad(
    day,
    2,
  )} ${exports.zeroPad(hour, 2)}:${exports.zeroPad(minute, 2)}`;
};
