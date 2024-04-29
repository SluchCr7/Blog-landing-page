let menulinks = document.getElementById("menulinks");
let bars = document.getElementById("bars");
let arrow = document.querySelectorAll(".fa-chevron-down");


bars.addEventListener("click", () => {
    menulinks.classList.toggle("none");
    if (menulinks.classList.contains("none")) {
        bars.classList.remove("fa-xmark");
        bars.classList.add("fa-bars");
    } else {
        bars.classList.remove("fa-bars");
        bars.classList.add("fa-xmark");
    }
})

let Product_ul = document.getElementById("Product_ul");
let Company_ul = document.getElementById("Company_ul");
let Connect_ul = document.getElementById("Connect_ul");
let Connectlist = document.getElementById("Connectlist")
let Companylist = document.getElementById("Companylist")
let productlist = document.getElementById("productlist")
arrow.forEach((element) => {
    element.addEventListener("click", () => {
        element.classList.toggle("fa-chevron-up");
        element.classList.toggle("fa-chevron-down");
        console.log(element.parentNode.nextSibling) 
        if (element.parentNode.classList.contains("product")) {
            Product_ul.classList.toggle("none");
            productlist.classList.toggle("none")
        }
        else if (element.parentNode.classList.contains("company")) {
            Company_ul.classList.toggle("none");
            Companylist.classList.toggle("none")
        }
        else if (element.parentNode.classList.contains("connect")) {
            Connect_ul.classList.toggle("none");
            Connectlist.classList.toggle("none")
        }
    })
})