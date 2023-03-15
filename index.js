let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
}

function home(){
    window.scrollTo(0,10);
    // location.href = "#home";
}
function about(){
    // window.scrollTo(0,957);
    location.href = "#about";
}
function image(){
    // window.scrollTo(0,1960);
    location.href = "#image";
}
function cast(){
    // window.scrollTo(0,2300);
    location.href = "#cast";
}