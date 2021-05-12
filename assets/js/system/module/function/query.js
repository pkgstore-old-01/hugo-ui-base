export function getId($selector) {
  return document.getElementById($selector);
}

export function getAll($selector) {
  return document.querySelectorAll($selector);
}

export function get($selector) {
  return document.querySelector($selector);
}

export function getAttr($selector, $name) {
  return $selector.getAttribute($name);
}

export function setAttr($selector, $name, $value) {
  return $selector.getAttribute($name, $value);
}

export function removeAttr($selector, $name) {
  return $selector.getAttribute($name);
}

export function addClass($selector, $class) {
  return $selector.classList.add($class);
}

export function replaceClass($selector, $old, $new) {
  return $selector.classList.replace($old, $new);
}

export function toggleClass($selector, $class) {
  return $selector.classList.toggle($class);
}

export function removeClass($selector, $class) {
  return $selector.classList.remove($class);
}
