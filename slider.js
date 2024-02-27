$(document).ready(function() {
    let slideIndex = 0;
    showSlides();
  
    function showSlides() {
      let slides = $('.slide');
      for (let i = 0; i < slides.length; i++) {
        $(slides[i]).hide();
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      $(slides[slideIndex - 1]).fadeIn();
      setTimeout(showSlides, 2000); // Change slide every 2 seconds
    }
  });
  