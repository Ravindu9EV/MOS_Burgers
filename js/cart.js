document
  .getElementById("btnMenu")
  .addEventListener("click", function loadContent() {
    const page = window.open("index.html");
    page=page.fetch(this.getElementsByClassName(".text3")).innerHTML;
  });

  var func= require("./app.js")

  console.log(func.price())
  let p=func.price();
  document.getElementById("tot").innerText=p;
  console.log(p)