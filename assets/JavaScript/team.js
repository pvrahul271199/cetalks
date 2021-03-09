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

// Close the dropdown if the user clicks outside of it
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
  }
}

// var slick = document.querySelector(".slick-slide")
// slick.style.width="100px";
// slick.style.height = "260px";
// Slick Slider


  //Pre Loader
  $(window).on('load', function () {
    setTimeout(function () {
      $(".loader_bg").fadeToggle();
    }, 0);

  });

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
