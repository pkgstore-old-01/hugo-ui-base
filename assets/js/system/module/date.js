export function init() {
  local('[data-ext-fn="ext-date-local"]');
  local('[data-ext-fn="ext-time-local"]', 3);
}

function local($selector, $view = 0) {
  const $el = document.querySelectorAll($selector);
  let $utcDate, $localDate;

  $el.forEach(($i) => {
    $utcDate = $i.getAttribute('datetime');
    $localDate = date($utcDate, $view);
    $i.textContent = $localDate;
  });
}

function date($iso, $view) {
  let $date, $year, $month, $day, $hours, $minutes, $seconds, $out;

  $date = new Date($iso);
  $year = $date.getFullYear();
  $month = f24($date.getMonth() + 1);
  $day = f24($date.getDate());
  $hours = f24($date.getHours());
  $minutes = f24($date.getMinutes());
  $seconds = f24($date.getSeconds());

  switch ($view) {
    case 0:
      $out = $year + '/' + $month + '/' + $day + ' ' + $hours + ':' + $minutes + ':' + $seconds;
      break;
    case 1:
      $out = $year + '/' + $month + '/' + $day;
      break;
    case 2:
      $out = $hours + ':' + $minutes + ':' + $seconds;
      break;
    case 3:
      $out = $hours + ':' + $minutes;
      break;
    default:
      console.error('Unknown type!')
  }

  return $out;
}

function f24($num) {
  if ($num < 10) {
    $num = '0' + $num;
  }
  return $num;
}
