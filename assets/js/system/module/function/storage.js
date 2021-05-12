export function get($name) {
  return localStorage.getItem($name);
}

export function set($name, $value) {
  return localStorage.setItem($name, $value);
}

export function remove($name) {
  return localStorage.removeItem($name);
}
