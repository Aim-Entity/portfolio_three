function alternate(){
  let projects = document.querySelectorAll(".project");

  for(let i = 0; i < projects.length; i++) {

    if((i % 2) == 1){
      projects[i].classList.toggle("project")
      projects[i].classList.toggle("project-flip")

      projects[i].children[0].classList.toggle("p-left")
      projects[i].children[0].classList.toggle("left-push-back")
    }
  }
};

alternate()