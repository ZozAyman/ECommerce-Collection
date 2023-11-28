// Create PreLoader
var loader = document.querySelector("#preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
});

// CREATE BUTTON WHEN CLICK HIM SCROLL TO TOP
let btn = document.getElementById("btn-scroll");

window.onscroll = function() {
  if(scrollY >= 1500) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}
btn.onclick = function() {
  scroll({
    top:0,
    left:0,
    behavior: "smooth"
  });
};

/*=============== Responsive Navbar ===============*/
let ham = document.querySelector(".ham");
let navbar = document.querySelector(".navbar");
ham.onclick = function() {
    navbar.classList.toggle("active")
}

/*=============== Change Background Navbar ===============*/
window.addEventListener("scroll", () => {
    document.querySelector("header").classList.toggle("window-scroll", window.scrollY > 100);
    document.querySelector(".nav-item").style.color = "#fff";
});

// ============== Hide / Show DropDown Menu
let naveLink = document.getElementById("navbarDropdownMenuLink")
let dropDown = document.getElementById("dropdown")

naveLink.addEventListener("click", function() {
  dropDown.classList.toggle("show");
});




/*=============== SWIPER Products ===============*/
const swipercateg = new Swiper(".categ-container", {
    spaceBetween: 24,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
        992: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
  });



  /*=============== COUNTDOWN ===============*/
    let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

    let counter = setInterval(() => {

    // GET DATE NOW
    let dateNow = new Date().getTime();

    // FIND THE DATE DIFFERANCE BETWEEN NOW AND COUNTDOWN DATE
    let datDiff = countDownDate - dateNow;

    // GET TIME UNITES
    let days = Math.floor(datDiff / (1000 * 60 * 60 * 24));
    let hourse = Math.floor((datDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor(datDiff % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor((datDiff % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hourse").innerHTML = hourse;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    
        if(datDiff < 0) {
            clearInterval(counter);
        }

}, 1000)
  /*=============== COUNTDOWN BACKGROUND FIXED  ===============*/
let bg = document.querySelector(".countdown");
window.addEventListener("scroll", () => {
    // bg.style.backgroundSize = 120 - +window.pageYOffset/12+'%';
});




// WHEN CLICK ON BUTTON SEE MORE PORDUCTS TRANSPORT TO CART.HTML
let seeMore = document.getElementById("see-more");

seeMore.addEventListener("click", function() {
  window.location = "cart.html"
});



// PRE LOADER INTRO TO WEBSITE
