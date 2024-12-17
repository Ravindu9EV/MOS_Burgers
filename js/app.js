// document.getElementById("btnAdd").addEventListener("click", addToCart());
// var pr;
// function addToCart() {
//   //let c = document.getElementsByClassName("card");
//   // console.log(c[0].innerHTML);
//   // for (let i = 0; i < c.length; i++) {
//   // let html = c[i].innerHTML;
//   var name = document.getElementById("itemName").innerText;
//   var price = document.getElementById("price").innerText;
//   var discount = document.getElementById("itemDiscount").innerText;

//   console.log(name, price);
//   pr = (name, price) => {
//     console.log(name, price, discount);

//     return price;
//   };
//   // }
// }

//

let cart = document.querySelector(".cart");

let body = document.querySelector("body");
let closeCart = document.querySelector("#btnMenu");

let itemListHTML = document.querySelector(".cards");
let cartsHTML = document.querySelector(".itemList");

let cartSpan = document.querySelector(".cartSpan");

let itemList = [];
let carts = [];

cart.addEventListener("click", () => {
  body.classList.toggle("showCart");
  document.querySelector("#cartPage").ariaHasPopup;
});
closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
  document.querySelector("#cartPage").ariaHidden;
});

const burger = [
  {
    category: "Burgers",
    code: "B1001",
    name: "Classic Burger(Large)",
    description: "Tasty Burger",
    price: 750.0,
    discount: 15,
    expDate: "2024-09-28",
  },
];
let pasta = [];
let fries = [];
let chicken = [];
let submarine = [];
let bevarage = [];
const inventory = JSON.parse(localStorage.getItem("foodList")) || [
  {
    category: "Burgers",
    code: "B1001",
    name: "Classic Burger(Large)",
    description: "Tasty Burger",
    price: 750.0,
    discount: 15,
    expDate: "2024-09-28",
  },
];

inventory.forEach((inv) => {
  console.log(1);

  console.log("Inv: " + inv.code);
});

const addDataToRow = () => {
  itemListHTML.innerHTML = "";
  if (itemList.length > 0) {
    itemList.forEach((element) => {
      if (element.id.charAt(0) != "S") {
        let newFood = document.createElement("div");

        newFood.classList.add("card");
        newFood.dataset.id = element.id;

        newFood.innerHTML = `
            <h5 class="iName">${element.name}</h5>
            <div class="row">
            <img src="${element.image}" alt="" />

            <p>${element.discription}</p>
          </div>

          <div class="prow">
            <p class="lb" for="price">Rs.</p>
            <div class="price">${element.price}</div>

            <p class="lb2" for="discount">Discount Rs.</p>
            <div class="discount">${element.discount}</div>

          </div>
          <div class="btnRow">
            <button class="btnAdd">Add To Cart</button>
            <button class="btnBuy">Buy</button>
            <button class="btnRemove">Remove</button>

            <button class="btnEdit">Edit</button>
          </div>
      `;
        itemListHTML.appendChild(newFood);
      }
    });
  }
};

//------------Identify the relevent card based on clicked for add to cart----
// itemListHTML.addEventListener("click", (event) => {
//   let positionClick = event.target;
//   if (positionClick.classList.contains("btnAdd")) {
//     const cardElement = positionClick.closest(".card");
//     const food_id = cardElement ? cardElement.dataset.id : undefined;

//     if (food_id) {
//       //addToCart(food_id);
//       addToList(food_id);
//       alert(food_id);
//     } else {
//       console.error("ID not Found");
//     }
//   }
// });

// const addToCart = (food_id) => {
//   let foodIsInCart = carts.findIndex((value) => value.item_id == food_id);
//   if (carts.length <= 0) {
//     carts = [
//       {
//         item_id: food_id,
//         quantity: 1,
//       },
//     ];
//   } else if (foodIsInCart < 0) {
//     carts.push({
//       item_id: food_id,
//       quantity: 1,
//     });
//   } else {
//     carts[foodIsInCart].quantity += 1;
//   }
//   addItemOnPage();
//   saveData();
// };

//  const ids = [];
// const addItemOnPage = () => {
//   cartsHTML.innerHTML = "";
//   let totalQuantity = 0;
//   if (carts.length > 0) {
//     carts.forEach((cart) => {
//       totalQuantity += cart.quantity;
//       let newItem = document.createElement("div");
//       newItem.classList.add("food");
//       let position = itemList.findIndex((value) => value.id == cart.item_id);
//       let details = itemList[position];

//       newItem.innerHTML = `

//             <div class="cItem">
//               <img src="${details.image}" alt="" />
//             </div>
//             <div class="name">${details.name}</div>
//             <div class="price">${
//               (details.price - details.discount) * cart.quantity
//             }</div>

//             <div class="quantity">
//               <span class="minus">-</span>
//               <span>${cart.quantity}</span>
//               <span class="plus">+</span>
//             </div>
//       `;
//       cartsHTML.appendChild(newItem);
//     });
//   }
//   cartSpan.innerText = totalQuantity;
// };

// cartsHTML.addEventListener("click", (event) => {
//   let positionClick = event.target;
//   if (
//     positionClick.classList.contains("minus") ||
//     positionClick.classList.contains("plus")
//   ) {
//     const food_id = positionClick.parentElement.parentElement.dataset.id;
//     let type = "minus";
//     if (positionClick.contains("plus")) {
//       type = "plus";
//     }
//     changeQuantity(food_id, type);
//     ids.push(food_id);
//   }
// });

// const changeQuantity = (food_id, type) => {
//   let positionOnItemInCart = carts.findIndex(
//     (value) => value.food_id == food_id
//   );
//   if (positionOnItemInCart >= 0) {
//     switch (type) {
//       case "plus":
//         carts[positionOnItemInCart].quantity =
//           carts[positionOnItemInCart].quantity + 1;
//         break;

//       default:
//         let valueChange = carts[positionOnItemInCart].quantity - 1;
//         if (valueChange > 0) {
//           carts[positionOnItemInCart].quantity = valueChange;
//         } else {
//           carts.splice(positionOnItemInCart, 1);
//         }
//         break;
//     }
//   }
//   saveData();
//   addItemOnPage();
// };
const saveData = () => {
  localStorage.setItem("cart", JSON.stringify(carts));
};
const addItems = () => {
  fetch("foodItems.json")
    .then((response) => response.json())
    .then((data) => {
      itemList = data;
      console.log(itemList);
      addDataToRow();

      // get saved cart details

      if (localStorage.getItem("cart")) {
        carts = JSON.parse(localStorage.getItem("cart"));
        //addItemOnPage();
        // displayItemInCart();
      }
    });
};

addItems();

// const addItemToCartPage = () => {
//   document.querySelector(".btnOrder").addEventListener("click", con());
// };
// const con = () => {
//   console.log(document.querySelector(".fName").innerText);
// };
// addItemToCartPage();
// if (localStorage.getItem("cart")) {
//   carts = JSON.parse(localStorage.getItem("cart"));
// }
// let b = document.querySelector(".fName").innerText;
// console.log(b);
// function dsip() {
//   carts.forEach((c) => {
//     console.log(carts);
//     console.log(c.id, c.name);
//   });
// }

// export function adddd() {
//   const orderbt = document.querySelector(".btnOrder");
//   if (orderbt) {
//     orderbt.addEventListener("click", () => {
//       console.log(document.querySelector(".fName").innerText);
//       let pos = ids.findIndex((value) => value.id == cart.item_id);
//       let det = itemList[pos];

//       console.log(det.name);
//       dsip();
//     });
//   } else {
//     console.log("not found");
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   adddd();
// });

// // ----------------------------------------
// function calculateFinalAmount() {
//   document.getElementById("addFinalAmount").value = total - discount;
// }

// document
//   .getElementById("addTotal")
//   .addEventListener("click", calculateFinalAmount());

// document.getElementById("btnAdd").addEventListener("click", addingProccess());

// function addingProccess() {
//   let item = document.getElementById("itemName").innerText;
//   let unitPrice = document.getElementById("price").innerText;

//   let discount = document.getElementById("itemDiscount").innerText;

//   console.log(item + "+" + unitPrice + "+" + discount + "");
// }

// if (localStorage.getItem("cart")) {
//   const cad = document.getElementById("f");
//   console.log(cad);
//   let menu = document.querySelector("#btnMenu");
//   menu.addEventListener("click", () => {
//     console.log("ko");
//     cad.classList.toggle(".card");
//   });
// }

//****--------------cart---------------***
let itemsInCartHTML = document.querySelector(".tRows");

let selectedItems = [];
function getSelectedItems() {
  console.log("ko");
  selectedItems.forEach((c) => {
    fetch("foodItems.json")
      .then((res) => res.json())
      .then((items) => {
        items.forEach((item) => {
          if (c === item.id) {
            console.log(item.price);
            itemsInCartHTML.innerHTML = "";
            let totQty = 0;
            totQty += item.quantity;
            let foodItem = document.createElement("div");
            foodItem.classList.add("tRow");
            foodItem.innerHTML = `
              <div class="thC fName cDetails">
                  <img src="images/burger.jpg" alt="" />
                  <p>Burger</p>
                </div>
                <div class="thC fPrice cDetails">1200.00</div>
                <div class="thC fDiscount cDetails">200</div>
                <div class="thC fQuantity cDetails">
                  <span class="minus">-</span>
                  <span class="qty">1</span>
                  <span class="plus">+</span>
                  <div class="btnPC">
                    <button class="btnC">Update</button>
                    <button class="btnC">Delete</button>
                  </div>
                </div>
            `;
            itemsInCartHTML.appendChild(foodItem);
          }
        });
      });
  });
}
//--------------------save data---------

//------------

itemListHTML.addEventListener("click", (event) => {
  let positionClick = event.target;
  if (positionClick.classList.contains("btnAdd")) {
    const cardElement = positionClick.closest(".card");
    const food_id = cardElement ? cardElement.dataset.id : undefined;

    if (food_id) {
      //addToCart(food_id);
      console.log(cardElement);

      selectedItems.push(food_id);
      saveData();

      addToList(food_id);
      alert(food_id);
    } else {
      console.error("ID not Found");
    }
  }
});

//----------------
const addToList = (food_id) => {
  let foodIsInCart = carts.findIndex((value) => value.item_id == food_id);
  if (carts.length <= 0) {
    carts = [
      {
        item_id: food_id,
        quantity: 1,
      },
    ];
  } else if (foodIsInCart < 0) {
    carts.push({
      item_id: food_id,
      quantity: 1,
    });
  } else {
    carts[foodIsInCart].quantity += 1;
  }
  displayItemInCart();
};

//-----------------add to cart---------

const displayItemInCart = () => {
  itemsInCartHTML.innerHTML = "";
  let cQuantity = 0;
  if (carts.length > 0) {
    carts.forEach((cart) => {
      cQuantity += cart.quantity;
      let newItem = document.createElement("div");
      newItem.classList.add(".tRow");
      let position = itemList.findIndex((value) => value.id == cart.item_id);
      let details = itemList[position];

      newItem.innerHTML = `
          <div class="thC fName cDetails">
                  <img src="images/burger.jpg" alt="" />
                  <p>Burger</p>
                </div>
                <div class="thC fPrice cDetails">1200.00</div>
                <div class="thC fDiscount cDetails">200</div>
                <div class="thC fQuantity cDetails">
                  <span class="minus">-</span>
                  <span class="qty">1</span>
                  <span class="plus">+</span>
                  <div class="btnPC">
                    <button class="btnC">Update</button>
                    <button class="btnC">Delete</button>
                  </div>
                </div>
      `;
      itemsInCartHTML.appendChild(newItem);
    });
    document.querySelector(".cartSpan").innerText = cQuantity;
    carts.forEach((c) => {
      console.log(c);
    });
  }
};
//---------------------cart qty-----

let qty = document.querySelector(".qty");
let fPrice = document.querySelector(".fPrice");
let fDiscount = document.querySelector(".fDiscount");

console.log(qty.innerText, fPrice.innerText, fDiscount.innerText);
let quantity = 1;
//---------increase qty-------
document.querySelector(".plus").addEventListener("click", () => {
  quantity = quantity + 1;
  qty.innerText = quantity;
});
//--------decreas qty-------
document.querySelector(".minus").addEventListener("click", () => {
  if (quantity > 0) {
    quantity -= 1;
  }
  qty.innerText = quantity;
});

document.getElementById("addTotal").value = fPrice.innerText;
document.getElementById("addDiscount").value = fDiscount.innerText;
document.getElementById("addFinalAmount").value =
  (fPrice.innerText - fDiscount.innerText) * qty.innerText;
document.querySelector(".cart").addEventListener("click", displayItemInCart());
