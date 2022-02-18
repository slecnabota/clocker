let expand = document.getElementById("reasons__right");
function expandHide(){
    expand.classList.toggle("hidden");
    if(expand.classList.contains('hidden')){
        document.getElementById("button__expand").innerHTML = "Узнать больше";
        console.log("hi");
    }
    else{
        document.getElementById("button__expand").innerHTML = "Скрыть";
        console.log("hnnn");
    }
  }
var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides(slideIndex += 1);
}

function minusSlide() {
  showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("parag");
  var dots = document.getElementsByClassName("noguma-pomoki-kadra");
  if (n > slides.length) {
  slideIndex = 1
  }
  if (n < 1) {
  slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace("deystvuyus", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " deystvuyus";
}


document.getElementById("menu").onclick=function(){
    document.getElementById("aside").classList.toggle("active");
}
document.getElementById("aside__backdrop").onclick=function(){
    document.getElementById("aside").classList.toggle("active");
}
document.getElementById("aside__close").onclick=function(){
    document.getElementById("aside").classList.toggle("active");
}
