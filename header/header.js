const shortNav = document.querySelector(".short-nav");
const h3 = document.querySelector(".short-nav h3");
const container = document.querySelector(".short-container");

window.onscroll = function () {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    h3.style.display = "none";
    shortNav.style.width = "12rem";
    shortNav.style.borderBottomRightRadius = "2rem";
  }else{
    h3.style.display = "inline";
    shortNav.style.width = "100%";
    shortNav.style.borderBottomRightRadius = "none";
  }
};
