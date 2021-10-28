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
  let simpleDark = document.querySelectorAll(".simple-dark");
  
  sun.addEventListener("click", e => {
    for(let i = 0; i < simpleDark.length; i++) {
      simpleDark.classList.toggle("simple-dark");
      simpleDark.classList.toggle("simple-light");
    }
  })
};

colourMode()
phoneNav()