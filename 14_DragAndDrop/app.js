var boxes = document.querySelectorAll(".box");
var targets = document.querySelectorAll(".draggable");
var currentTarget = null;

boxes.forEach((box) => {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("drop", dragDrop);
});

targets.forEach((target) => {
  target.addEventListener("dragstart", dragstart);
  target.addEventListener("dragend", dragend);
});

function dragstart() {
  currentTarget = this;
  this.classList.add("dragging");
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop(e) {
  e.preventDefault();
  if (!this.querySelector(".draggable")) {
    this.appendChild(currentTarget);
  } else {
    // console.log("đã có mục r");
  }
}

function dragend() {
  this.classList.remove("dragging");
  //   currentTarget = null;
}
