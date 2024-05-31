function createDiv(number) {
  let container = document.querySelector(".container");
  for (let i = 0; i < number; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("square");

    newDiv.addEventListener("mouseover", function () {
      setColor(this);
    });

    // Thêm sự kiện rời chuột
    newDiv.addEventListener("mouseout", function () {
      removeColor(this);
    });

    // Thêm thẻ div vào container
    container.appendChild(newDiv);
  }
}


function setColor(element) {
  // Kiểm tra nếu element là một phần tử DOM hợp lệ
  if (element && element.style) {
    var color = generateRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 10px ${color}, 0 0 100px ${color}`;
  } else {
    // console.error("Element không hợp lệ");
  }
}

function removeColor(element) {
  if (element && element.style) {
    element.style.backgroundColor = "#1d1d1d";
    element.style.boxShadow = "0 0 2px #000";
  } else {
    // console.error("Element không hợp lệ");
  }
}

function generateRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


createDiv(200);
