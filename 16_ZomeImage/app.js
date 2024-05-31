const zoomer = document.querySelector(".zoomer");
const wrapImg = document.querySelectorAll(".zoomer .image");
const result = document.querySelector(".zoomer .result");
const size = 4;

var initStage = [
  { src: "bike1.jpg", type: "meat" },
  { src: "bike2.jpg", type: "drink" },
];



wrapImg.forEach((image) => {
  image.addEventListener("mousemove", (e) => {
    let img = e.currentTarget.querySelector("img");
    let height = img.offsetHeight;
    let width = img.offsetWidth;
    let x = (e.layerX / width) * 100;
    let y = (e.layerY / height) * 100;
    let posX = e.pageY - zoomer.offsetTop;
    let posY = e.pageX - zoomer.offsetLeft;

    result.classList.remove("hide");
    result.style.cssText = `
    background-image:url(${img.src});
    background-position: ${x}% ${y}%;
    top:${posX}px;
    left:${posY}px;
    background-size: ${img.width * size}px ${img.height * size}px;

    `;
  });
  image.addEventListener("mouseleave", (e) => {
    result.classList.add("hide");
  });
});
