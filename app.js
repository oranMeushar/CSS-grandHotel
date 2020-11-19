let navButton = document.querySelector(".nav-button");

navButton.addEventListener("click", ()=>{
    document.querySelector(".nav-button-pressed").classList.toggle("nav-button-active");
})