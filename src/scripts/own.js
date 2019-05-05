$( document ).ready(function() {
    console.log( "ready!" );

    $(".burger").click(function(){
        $(".burger").toggleClass("open")
        $(".navbar").toggleClass("navbar--open")
        $(".dotstyle").toggleClass("dotstyle--open")
    })

    $(".projects__menu__item").click(function(){
        if($(".projects__menu__item").hasClass("item--active")){
            $(".projects__menu__item").removeClass("item--active")
        }
        $(this).addClass("item--active")
    })

    $(".nav__li").click(function(){
        if($(".nav__li").hasClass("current")){
            $(".nav__li").removeClass("current")
        }
        $(this).addClass("current")
    })



        //Smooth scroll

      // Add smooth scrolling to all links
  $(".nav__a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 60
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
       // window.location.hash = hash;
      });
    } // End if
  });


  
  var validateForm = function() {

    $('.validate-form').on('submit', function(e){

        var  
            errCount = 0, // Aantal errors
            fields = document.querySelectorAll('form .required'), // Target de required velden
            checkMail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm; // Check voor valid email

        if (!fields.length) { return; } // Check om te zien of er velden required zijn, zoniet return true;

        // Loopen door alle velden
        [].forEach.call(fields, function(field) {

            removeErroField(field);
          
            // Als een veld een lege value heeft of null:
            if(field.value == '' || field.value == null) {

                field.classList.add('error'); // Aan het veld class 'error' toevoegen
                errCount ++; // Aantal errors +1
                createErrorField(field, field.dataset.required);

            // Check if field type is email en of emailadres wel degelijk een emailadres is
            } else if (field.type == 'email' && !checkMail.test(field.value)) {
                
                field.classList.add('error'); // Aan het veld class 'error' toevoegen
                errCount ++; // Aantal errors +1
                createErrorField(field, field.dataset.requiredMail);

            // Anders:
            } else {
                
                field.classList.remove('error'); // 'error' class verwijderen van veld
                removeErroField(field);

            }

        });

        // Als er 0 errors zijn, zet valid op true zodat form kan submitten
        if (errCount !== 0) { e.preventDefault(); }

    });

    // Create een error message
    var createErrorField = function(fld, msg) {

        var errorMsg = document.createElement('span');
            errorMsg.classList.add('error-msg'),
            errorMsg.innerHTML = msg;

        fld.parentNode.appendChild(errorMsg);

    }

    // Verwijder error messages
    var removeErroField = function(fld) {

        var errorMsg = fld.parentNode.querySelector('.error-msg');
        if (!errorMsg) { return; }
        fld.parentNode.removeChild(errorMsg);

    }

}

validateForm();

//scrollnav
/*
const content = document.querySelector('.wrapper');
scrollnav.init(content);

*/

const bodyScrollLock = require('./bodyScrollLock.js');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll; 

function openModal() {

  $("#modal").css({
    'opacity' : '1',
    'z-index' : '5'
  })
  setTimeout(function(){
    $('.modal-content__image').addClass("image--open")
  }, 500);  

}

function closeModal() {
  
    setTimeout(function(){
      $("#modal").css({
        'opacity' : '0',
        'z-index' : '0' 
     })
  }, 300)
  $('.modal-content__image').removeClass("image--open")
}

$(".grid-item").click(function(){
  openModal();
  
  $(".modal-content__image").css({
    'background-image' : ('url(' + $(this).data("image") + ')')
  });

  var caption = $(this).find("p").text();
  $(".modal-content__caption").text(caption);

});
  $(".close-cursor").click(closeModal);



  //FLEXSLIDER

  var newWindowWidth = $(window).width();
  if(newWindowWidth < 969){

    $('.carousel').slick({
      accessibility: false,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      adaptiveHeight: false,
      slidesToShow: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      dots: true,
      cssEase: 'linear',
      infinite: true,
      //centerMode: true,
      dotsClass: 'carousel-dots'
    })
    .on('setPosition', function (event, slick) {
      slick.$slides.css('height', slick.$slideTrack.height() + 'px');
  })

  }

  else{
    $('.carousel').slick({
      accessibility: false,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      adaptiveHeight: false,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      cssEase: 'linear',
      infinite: true,
      //centerMode: true,
      dotsClass: 'carousel-dots'
    })

  }

  $(".play-video").click(function(){
    $(".screen-overlay").css("visibility", "visible")
    $("#ytframe").attr("src", "https://www.youtube.com/embed/BPKDOMot9eU")
  })

  $(".screen-overlay--close").click(function(){
    $(".screen-overlay").css("visibility", "hidden")
    $("#ytframe").attr("src", "")
  })

  





});
/*
    $(".burger").click(function(){
      $(".burger").toggleClass("open")*/