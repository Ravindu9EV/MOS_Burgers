let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

document.getElementById("btnAdd").addEventListener("click", addToCart());

function addToCart() {
  //let c = document.getElementsByClassName("card");
  // console.log(c[0].innerHTML);
  // for (let i = 0; i < c.length; i++) {
  // let html = c[i].innerHTML;
  var name = document.getElementById("itemName").innerText;
  var price = document.getElementById("price").innerText;

  console.log(name, price);
  const pr = (name, price)=> {
    console.log(name, price);
  
    return price;
  };
  // }
}



module.exports = { price: pr };
