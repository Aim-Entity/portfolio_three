function phoneNav() {
  let hamburger = document.querySelector(".hamburger")
  let dropdown = document.querySelector(".nav-dropdown")

  hamburger.addEventListener("click", (e) => {
    // dropdown.classList.toggle("nav-dropdown")
    dropdown.classList.toggle("nav-dropdown-active")
  });
};

function colourMode() {
  let sun = document.querySelector(".sun-btn");
  let moon = document.querySelector(".moon-btn");
  let defaultColour = document.querySelectorAll(".default-colour");
  let bodyElement = document.querySelector("body");
  
  sun.addEventListener("click", e => {
    bodyElement.classList.toggle("body-change");
    sun.classList.toggle("color-mode-deactive");
    moon.classList.toggle("color-mode-deactive");

    for(let i = 0; i < defaultColour.length; i++) {
      defaultColour[i].classList.toggle("default-colour");
      defaultColour[i].classList.toggle("colour-mode");
    }
  })

  moon.addEventListener("click", e => {
    bodyElement.classList.toggle("body-change");
    sun.classList.toggle("color-mode-deactive");
    moon.classList.toggle("color-mode-deactive");

    for(let i = 0; i < defaultColour.length; i++) {
      defaultColour[i].classList.toggle("default-colour");
      defaultColour[i].classList.toggle("colour-mode");
    }
  })
};

function btnAnim() {

}

colourMode()
phoneNav()