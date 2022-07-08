export function isObj(obj: any) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
