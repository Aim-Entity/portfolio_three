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

function btnAnim() {
  let btn = document.querySelectorAll(".btn-div")

  for(let i = 0 ; i < btn.length; i++) {
    btn[i].addEventListener("mouseenter", e => {
      let layerBtn = e.target.children[0]
      // layerBtn.classList.toggle("layer-btn-active")
      // layerBtn.classList.toggle("layer-btn")

      gsap.to(layerBtn, {duration: 0.35, y: "17.8px", x: "-17px", ease: "Power2.easeIn"})
    })

    btn[i].addEventListener("mouseout", e=> {
      let layerBtn = e.target.children[0]
      gsap.to(layerBtn, {duration: 0.35, y: "0px", x: "0px", ease: "Power2.easeIn"})
    })
  }
}

function pageAnimations() {
  // if(window.innerWidth > 1000) {
  let award = document.querySelectorAll(".award");
  // for(let i = 0; i < award.length; i++) {
  //   // award[i].style.opacity = 0
  //   award[i].style.top = "75px"
  // };

  console.log("pass")
  let state = 0;
  document.addEventListener("scroll", e => {
    let scrollNumber = window.scrollY;
    console.log(scrollNumber);

    if(scrollNumber >= 225 && state == 0){
      state = 1
      console.log("Test")
      
      gsap.to(award, {duration: 0.45, y: "75px", opacity: 1, ease: "Power2.easeIn", stagger: 0.25})
    }
  })
}

pageAnimations()
btnAnim();
enlarge();
slider();
shift();
hover(".client-column a");