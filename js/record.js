var seconds = 5000;

var slideIndex3 = 0;
showSlides3();
var slideIndex7 = 0;
showSlides7();
var slideIndex14 = 0;
showSlides14();
var slideIndex52 = 0;
showSlides52();
var slideIndex22 = 0;
showSlides22();

function showSlides3() {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > slides.length) {slideIndex3 = 1}
  slides[slideIndex3-1].style.display = "block";
  setTimeout(showSlides3, seconds); // Change image every 2 seconds
  
}
function showSlides7() {
    var i;
    var slides = document.getElementsByClassName("mySlides7");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex7++;
    if (slideIndex7 > slides.length) {slideIndex7 = 1}
    slides[slideIndex7-1].style.display = "block";
    setTimeout(showSlides7, seconds); // Change image every 2 seconds
  }

function showSlides14() {
    var i;
    var slides = document.getElementsByClassName("mySlides14");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex14++;
    if (slideIndex14 > slides.length) {slideIndex14 = 1}
    slides[slideIndex14-1].style.display = "block";
    setTimeout(showSlides14, seconds); // Change image every 2 seconds
  }

  function showSlides52() {
    var i;
    var slides = document.getElementsByClassName("mySlides52");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex52++;
    if (slideIndex52 > slides.length) {slideIndex52 = 1}
    slides[slideIndex52-1].style.display = "block";
    setTimeout(showSlides52, seconds); // Change image every 2 seconds
  }
  function showSlides22() {
    var i;
    var slides = document.getElementsByClassName("mySlides22");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex22++;
    if (slideIndex22 > slides.length) {slideIndex22 = 1}
    slides[slideIndex22-1].style.display = "block";
    setTimeout(showSlides22, seconds); // Change image every 2 seconds
  }