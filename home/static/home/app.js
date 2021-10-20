function shift() {
  let chevronRight = document.querySelector(".right-chevron");
  let chevronLeft = document.querySelector(".left-chevron");
  let cards = document.querySelectorAll(".t-card");
  let index = 0;

  let limitIndex = (cards.length - 1);

  cards[index].classList.toggle("active-card");

  chevronRight.addEventListener("click", (e) => {
    if(index == limitIndex) {
      // gsap.to(cards[index], {opacity: 0, duration: 1, y: "200px", ease: "Power2.easeOut"})
      cards[index].classList.toggle("active-card");

      index = 0

      cards[index].classList.toggle("active-card");
      // gsap.from(cards[index], {opacity: 0, duration: 1, y: "-200px", ease: "Power2.easeOut"})
    } else {
      // gsap.to(cards[index], {opacity: 0, duration: 1, y: "200px", ease: "Power2.easeOut"})
      cards[index].classList.toggle("active-card");

      index ++

      cards[index].classList.toggle("active-card");
    };
  });

  chevronLeft.addEventListener("click", (e) => {
    if(index == 0) {
      cards[index].classList.toggle("active-card");
      index = limitIndex
      cards[index].classList.toggle("active-card");
    } else {
      cards[index].classList.toggle("active-card");
      index --
      cards[index].classList.toggle("active-card");
    };
  })
};

function hover(element) {
  let targets = document.querySelectorAll(element);

  for(let i = 0; i < targets.length; i++) {
    targets[i].addEventListener("mouseenter", (e) => {
      gsap.to(e.target, {duration: 1, width: "200px", height: "140px", ease: "Power2.easeOut"})
    })
  };
}

function slider() {
  if(window.innerWidth > 1100) {
    let sliderContainer = document.querySelector(".s3-slider")
    let position = -410
    document.addEventListener("scroll", e => {

      if(window.scrollY >= 800) {
        positionEquation = position + (window.scrollY / 100) + 20
        positionDifference = position - positionEquation

        // console.log(`${(position - positionDifference) * 1.5}px`)
        // console.log(`${window.scrollY - 800}px`)
        sliderContainer.style.left = `${window.scrollY - 1750}px`
      }
    })
  }
}

function enlarge() {
  let divs = document.querySelectorAll(".client-img");
  
  for(let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("mouseenter", e => {
      e.target.classList.toggle("client-img");
      e.target.classList.toggle("client-img-hover");
    });

    divs[i].addEventListener("mouseout", e => {
      e.target.classList.toggle("client-img-hover");
      e.target.classList.toggle("client-img");
    })
  }
}

enlarge();
slider();
shift();
hover(".client-column a");