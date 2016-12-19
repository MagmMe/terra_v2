// Animated effects

function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}

function initMap() {
        var uluru = {lat:49.8178201, lng:19.0363254};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

        options = $.extend({
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }, options);
      }

       $('#map').addClass('scrolloff'); // set the pointer events to none on doc ready
        $('#map').on('click', function () {
            $('#map').removeClass('scrolloff'); // set the pointer events true on click
        });



$(document).ready(function(){
    $('.magmeAnimation').each(function() {
        animationHover(this, 'pulse');
    });


      $.cookieBar();

            // AOS Effects Library

      AOS.init({
      offset: 200,
      duration: 2000,
      easing: 'ease-in-sine',
      delay: 100,
    });


});


