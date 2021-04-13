var SpringslideIndex = 1;
showSlidesSpring(SpringslideIndex);

// Next/previous controls
function SpringplusSlides(n) {
  showSlidesSpring(SpringslideIndex += n);
}

function showSlidesSpring(n) {
  var i;
  var slides = document.getElementsByClassName("springCamp");
  if (n > slides.length) {SpringslideIndex = 1}
  if (n < 1) {SpringslideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[SpringslideIndex-1].style.display = "block";
}