$(document).ready(function () {
  //CounterUp
  //Counter
  $(".count-num").rCounter({
    duration: 30,
  });
});
//Add Class
function displayItem(addID, addClass, ovlerlayID) {
  let addDiv = document.querySelector(`#${addID}`);
  let ovlerlayDiv = document.querySelector(`#${ovlerlayID}`);
  addDiv.classList.toggle(addClass);
  ovlerlayDiv.style.cssText = "  display: block;";
}
//Remove Class
function removeDisplayItem(removeID, removeClass, ovlerlayID) {
  let addDiv = document.querySelector(`#${removeID}`);
  let ovlerlayDiv = document.querySelector(`#${ovlerlayID}`);
  addDiv.classList.toggle(removeClass);
  ovlerlayDiv.style.cssText = "  display: none;";
}

//OutSide Scroll Hidden
function scrollOutsideHidden() {
  let htmlTag = document.querySelector("html");
  htmlTag.style.cssText = "overflow:hidden;";
}
//OutSide Scroll Scroll
function scrollOutsideScroll() {
  let htmlTag = document.querySelector("html");
  htmlTag.style.cssText = "overflow:auto;";
}

// Form Validation Methods Using Bootstrap 5
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

//Sticky Navbar
function stickyHeader(stickyTag, stickyClass, scrollHeight = 0) {
  let stickyWrapper = document.querySelector(`#${stickyTag}`);
  stickyWrapper.classList.toggle(stickyClass, scrollY > scrollHeight);
}
let headerWrapper = document.querySelector("#headerWrapper");
if (headerWrapper) {
  window.addEventListener("scroll", () => {
    stickyHeader("headerWrapper", "navbar_fixed");
  });
}

// Mobile Menu
let navbarIcon = document.querySelector("#menuToggleBtn");
let navbarCloseIcon = document.querySelector(".close_icon");
let navbarOverlay = document.querySelector(".mobile_menu_overlay");
let mobileMenuArea = document.querySelector(".mobile_menu_area");
if (navbarIcon) {
  navbarIcon.addEventListener("click", () => {
    mobileMenuArea.classList.add("navbar_active");
    scrollOutsideHidden();
  });
}

if (navbarCloseIcon) {
  navbarCloseIcon.addEventListener("click", () => {
    hideNavbar();
  });
}

if (navbarOverlay) {
  navbarOverlay.addEventListener("click", () => {
    hideNavbar();
  });
}

function hideNavbar() {
  mobileMenuArea.classList.remove("navbar_active");
  scrollOutsideScroll();
}

//Testimonial Slider
var swiperPartner = new Swiper(".testimonial_slider_area .swiper", {
  // Default parameters
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  speed: 1050,

  navigation: {
    nextEl: ".testimonial_next_btn",
    prevEl: ".testimonial_prev_btn",
  },
});

// ScrollToUp
let scroll = document.querySelector("#scrollTop");
function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
if (scroll) {
  window.addEventListener("scroll", function () {
    scroll.classList.toggle("scroll_active", window.scrollY > 500);
  });
  scroll.addEventListener("click", () => {
    scrollUp();
  });
}

//Animation
scrollCue.init({
  duration: 500,
  interval: -300,
  percentage: 0.8,
});

//Outside Click Detect
function outSideDetect(
  clickId,
  dropdownId,
  dropdownRemoveId,
  dropdownRemoveClass
) {
  document.addEventListener("click", function (event) {
    let clickDiv = document.querySelector(`#${clickId}`);
    let dropdownDiv = document.querySelector(`#${dropdownId}`);
    let dropdownRemoveDiv = document.querySelector(`#${dropdownRemoveId}`);
    let isClickInside = clickDiv.contains(event.target);
    let isClickOutside = dropdownDiv.contains(event.target);
    if (!isClickInside && !isClickOutside) {
      dropdownRemoveDiv.classList.remove(dropdownRemoveClass);
    }
  });
}
