const count = document.querySelectorAll(".count");

function counter(el, to) {
  var count = 0;
  var time = 103;
  var step = to / time;
  let counting = setInterval(function () {
    count += step;
    if (count < to) {
      el.innerText = count.toFixed();
    } else {
      clearInterval(counting);
      el.innerText = to;
    }
  }, 1);
}

count.forEach((item) => {
  var to = parseInt(item.innerText);
  counter(item, to);
});
