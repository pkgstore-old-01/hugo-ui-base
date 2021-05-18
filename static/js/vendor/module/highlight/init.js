function init() {
  addEventListener('load', () => {
    highlight();
  });
}

function highlight() {
  const $codes = document.querySelectorAll('pre > code');
  const $length = $codes.length;
  if ($length === 0) return;

  $codes.forEach(($code) => {
    $code.classList.add('hljs');
    const worker = new Worker('/js/vendor/module/highlight/worker.min.js');
    worker.onmessage = ($event) => {
      $code.innerHTML = $event.data;
    }
    worker.postMessage($code.textContent);
  });
}

init();
