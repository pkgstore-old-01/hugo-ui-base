export function init() {
  selectAll('[data-ext-fn="ext-select-all"]');
}

function selectAll($selector) {
  const $el = document.querySelectorAll($selector);

  $el.forEach(($i) => {
    eventSelectAll($i);
  });
}

function eventSelectAll($i) {
  let $event;

  $event = $i.addEventListener('click', ($e) => {
    $e.currentTarget.select();
    document.execCommand('copy');
  });

  return $event;
}
