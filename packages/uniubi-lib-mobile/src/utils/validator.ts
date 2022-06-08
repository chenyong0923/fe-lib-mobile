export function isObj(x: any) {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}
