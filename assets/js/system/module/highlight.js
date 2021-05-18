export function init() {
  document.addEventListener('DOMContentLoaded', ($e) => {
    highlight('pre > code');
  });
}

function highlight($selector) {
  const $el = document.querySelectorAll($selector);
  const $length = $el.length;

  for (let $i = 0; $i < $length; ++$i) {
    hljs.highlightElement($el[$i]);
  }
}
