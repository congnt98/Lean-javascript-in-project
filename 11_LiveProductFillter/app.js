var mocData = [
  {
    image: "",
    name: "sp1",
    price: 999,
    picture: "",
    title: "title",
  },
  { image: "", name: "sp1", price: 999, picture: "", title: "title" },
];
// getProductS();

var products = document.querySelector(".products");
var search = document.querySelector("#filter");

// async function getProductS() {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const data = await res.json();

//   products.innerHTML = "";
//   data.forEach((product) => {
//     var newProduct = document.createElement("div");
//     newProduct.setAttribute("class", "product");
//     newProduct.innerHTML = `
//              <img src="${product.image}" alt="">
// 			<div class="product-detail">
// 				<h4>${product.title.slice(0, 30)}</h4>
// 				<p>$${product.price}</p>
// 			</div>
//       `;
//     products.appendChild(newProduct);
//   });
// }

// search.addEventListener("input", function (e) {
//   let txt = e.target.value.trim();
//   var listItem = document.querySelectorAll(".product");
//   listItem.forEach((item) => {
//     console.log(item.innerText.toLowerCase().includes(txt));
//     if (item.innerText.toLowerCase().includes(txt)) {
//       item.classList.remove("hide");
//     } else{
//       item.classList.add("hide");

//     }
//   });
// });

search.addEventListener("input", (e) =>
  searchProduct(e.target.value.toLowerCase().trim())
);

const searchProduct = (keyword) => {
  var listProduct = document.querySelectorAll(".product");
  listProduct.forEach((item) => {
    if (item.innerText.toLowerCase().includes(keyword)) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
};

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  products.innerHTML = "";
  data.forEach((item) => {
    const product = document.createElement("div");
    product.setAttribute("class", "product");
    product.innerHTML = `
  <img src="${item.image}" alt="">
  <div class="product-detail">
  <h4>${item.title.slice(0, 30)}</h4>
  <p>$${item.price}</p>
  </div>
`;
    products.appendChild(product);
  });
}

getData();
