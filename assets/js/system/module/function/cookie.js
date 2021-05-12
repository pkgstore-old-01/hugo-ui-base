export function get($name) {
  return document.cookie.split(';').some((item) => item.includes($name));
}

export function set($name, $value) {
  const $path = '/'
  const $expires = 'Fri, 31 Dec 9999 23:59:59 UTC';
  return document.cookie = $name + '=' + $value + '; path=' + $path + '; expires=' + $expires;
}

export function remove($name) {
  const $path = '/'
  const $expires = 'Thu, 01 Jan 1970 00:00:00 UTC';
  return document.cookie = $name + '=; path=' + $path + '; expires=' + $expires;
}
