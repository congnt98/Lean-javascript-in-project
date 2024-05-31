// hide or show css
const tabs = document.querySelectorAll(".food-menu button");
const ListItem = document.querySelectorAll(".food-item");
// 2
const foodList = document.querySelector(".food-list");
const foodItems = document.querySelectorAll(".food-item");
const initStage = [
  //   { src: "test", type: "meat" },
  //   { src: "test", type: "drink" },
];

foodItems.forEach((e) => {
  initStage.push({
    src: e.firstElementChild.src,
    type: e.attributes[1].value,
  });
});

function render(data) {
  foodList.innerHTML = "";
  data.forEach((item) => {
    const templateFood = document.createElement("div");
    templateFood.setAttribute("class", "food-item");
    templateFood.innerHTML = `
    <img src=${item.src} alt="${item.type}">`;
    foodList.appendChild(templateFood);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    var type = e.currentTarget.getAttribute("type-food");
    let filterData = initStage.filter((e) => {
      return type == "all" || e.type == type;
    });
    render(filterData);
  });
});
