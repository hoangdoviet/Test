var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function myFunction() {
  var width = window.outerWidth;
  console.log(width);
  if (width <= 768) {
    showSlides(slideIndex);
  }  
  else{
    show();
  }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("product-list-item");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
}
function show() {
  var i;
  var slides = document.getElementsByClassName("product-list-item");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "block";  
  }
}
