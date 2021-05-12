export function init() {
  selectAll('[data-ext-fn="ext-select-all"]');
}

function selectAll($selector) {
  const $el = document.querySelectorAll($selector);
  const $length = $el.length;

  for (let $i = 0; $i < $length; ++$i) {
    eventSelectAll($el[$i]);
  }
}

function eventSelectAll($i) {
  let $event;

  $event = $i.addEventListener('click', ($e) => {
    $e.currentTarget.select();
    document.execCommand('copy');
  });

  return $event;
}
