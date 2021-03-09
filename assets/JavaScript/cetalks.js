 //Pre Loader
 $(window).on('load', function () {
  setTimeout(function () {
    $(".loader_bg").fadeToggle();
  }, 0);

});


var x = document.getElementById("myAudio"); 
var pause = document.querySelector('.pause');
var play = document.querySelector('.play');
var btn = document.querySelector('#app');
var whole = document.querySelector('.wholeplayer');
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

  // Play and pause
  btn.addEventListener('click', () => {
    if( play.classList.contains("active") )
    {
        // This block of code lets to make animation in play and pause button
        x.play(); 		        
        play.classList.remove("active");
        pause.classList.add("active");	   
    }
    else
    {
        x.pause();
		    pause.classList.remove("active");
        play.classList.add("active");
        
    }
  });





// Scroll Effect
// sCROLL EFFECT

$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('.main-writeup');
  var offset = startchange.offset();
  $(document).scroll(function() { 
     scroll_start = $(this).scrollTop();
     if(scroll_start > offset.top-272) {
         $('.fullnavspace').css('background-color', '#fff');
         $('.navbar').css('background-color', '#fff');
         $('.navbar').css('border-bottom', '1px solid rgb(255,255,255)');
         $('.navbar').css('box-shadow', '0px 1px 20px rgba(136, 136, 136, 0.3)');
      } 
  });
});

