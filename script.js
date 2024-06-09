"use strict";
const mobileNavButton = document.getElementById("mobile-bar");
const mobileNavClose = document.getElementById("close-mobile-nav");
const mobileNav = document.getElementById("mobile-nav");

if (mobileNav && mobileNavButton && mobileNavClose) {
  mobileNavButton.onclick = () => {
    mobileNav.classList.add("active");
  };

  mobileNavClose.onclick = () => {
    mobileNav.classList.remove("active");
  };
} else {
  throw new Error("Mobile nav component not found");
}
