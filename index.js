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
}
function about(){
    document.getElementById('about').scrollIntoView({ behavior: 'smooth'});
}
function image(){
  document.getElementById('image').scrollIntoView({ behavior: 'smooth'});
}
function cast(){
  document.getElementById('cast').scrollIntoView({ behavior: 'smooth'});
}
