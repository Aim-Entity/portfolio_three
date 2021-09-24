function slider() {
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

slider();
hover(".client-column a")