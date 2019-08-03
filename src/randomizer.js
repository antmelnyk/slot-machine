export function randomInteger(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function randomProperty(obj) {
  const keys = Object.keys(obj)
  return obj[keys[keys.length * Math.random() << 0]];
}
