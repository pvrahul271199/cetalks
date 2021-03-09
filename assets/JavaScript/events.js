var navspace = document.querySelector('.fullnavspace');
var navigbar = document.querySelector('.navbar');

/* When the user clicks on the button, toggle between hiding and showing the dropdown content */

  function myFunction() {
    /* When the user clicks on the button, toggle between hiding and showing the dropdown content */
    document.querySelector(".mydropdown").classList.toggle(".navigshow");
    // There was a problem regardin transparent dropdown so tackle that below code is written
    navspace.style.backgroundColor = "#fff";
    navigbar.style.backgroundColor = "#fff";
    navigbar.style.borderBottom = "1px solid rgb(255,255,255)";
    navigbar.style.boxShadow = "0px 1px 20px rgba(136, 136, 136, 0.3)"
    $('.fullnavspace').css('background-color', '#fff');
  }

// To Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.threelines')) {
      var dropdowns = document.getElementsByClassName("mydropdown")
      var i;
      for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }}





  
  
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var slidestwo = document.getElementsByClassName("mySlidestwo");
    var slidesthree = document.getElementsByClassName("mySlidesthree");
    
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slidestwo[i].style.display = "none";
        slidesthree[i].style.display = "none";
        
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slidestwo[slideIndex - 1].style.display = "block";
    slidesthree[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3500); // Change image every 2 seconds
}

// sCROLL EFFECT

$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('.jumbotron');
    var offset = startchange.offset();
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top-72) {
           $('.fullnavspace').css('background-color', '#fff');
           $('.navbar').css('background-color', '#fff');
           $('.navbar').css('border-bottom', '1px solid rgb(255,255,255)');
           $('.navbar').css('box-shadow', '0px 1px 20px rgba(136, 136, 136, 0.3)');
        } 
    });
 });


