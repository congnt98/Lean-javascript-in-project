const elToShow = document.querySelectorAll(".show-on-scroll");

let isElInViewPort = (el) => {
	let rect = el.getBoundingClientRect()
	// some browsers support innerHeight, others support documentElement.clientHeight
	let viewHeight = window.innerHeight || document.documentElement.clientHeight

	return (
		(rect.top <= 0 && rect.bottom >= 0) ||
		(rect.bottom >= viewHeight && rect.top <= viewHeight) ||
		(rect.top >= 0 && rect.bottom <= viewHeight)
	)
}


function loop() {
  elToShow.forEach((el) => {
    if (!isElInViewPort(el)) {
      el.classList.remove("start");
    } else {
      el.classList.add("start");

    }
  });
}

window.onscroll = loop;


