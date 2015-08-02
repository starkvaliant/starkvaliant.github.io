


$(document).ready(function() {

/**
 * Menu
 * Adds the .active class once the visitor starts scrolling
 */
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll === 0) {
        $("header").removeClass("active");
    }
    else {
        $("header").addClass("active");
    }
});

/**
 * Sidr - http://www.berriart.com/sidr/
 * Sidebar menu
 */
    $('.nav-toggle').sidr({
        name: 'sidr-main',
        source: '.logo, .nav-collapse'
    });
    $('#sidr-main, body').click(function() {
        $.sidr('close', 'sidr-main');    
    });

/**
 * Replacement for VH
 */
    var bg = $("#home");
    jQuery(window).resize("resizeBackground");
    function resizeBackground() {
        bg.height(jQuery(window).height());
    }
    resizeBackground();
    window.addEventListener("orientationchange", resizeBackground, false);


/**
 * BttrLazyLoading
 */
    $('.project .bttrlazyloading').bttrlazyloading({
        animation: 'fadeIn'
    });

/**
 * Detect Screen Width.  If less than 580, replaces url string to pull mobile images
 * Runs Lightbox after completing
 */
    function checkWidth(){
        var windowsize = $(window).width();
        if (windowsize < 580) {
            $(".project a.lightbox").each(function(){
                var newURL = $(this).attr('href').replace('Desktop-Full', '580px-Full');
                $(this).attr('href', newURL);
            });
        }
        runLightbox();
    }
    checkWidth();

/**
 * Image Lightbox
 * http://osvaldas.info/image-lightbox-responsive-touch-friendly
 * Options written by original creator
 */   
    function runLightbox(){
        // ACTIVITY INDICATOR
        var activityIndicatorOn = function(){
            $( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
        },
            activityIndicatorOff = function(){
                $( '#imagelightbox-loading' ).remove();
            },

            // OVERLAY
            overlayOn = function(){
                $( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
            },
            overlayOff = function(){
                $( '#imagelightbox-overlay' ).remove();
            },

            // CLOSE BUTTON
            closeButtonOn = function( instance ){
                $( '<button type="button" id="imagelightbox-close" title="Close"></button>' ).appendTo( 'body' ).on( 'click touchend', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; });
            },
            closeButtonOff = function(){
                $( '#imagelightbox-close' ).remove();
            };

        //Calling  Function for project links!
        $( '.project a' ).imageLightbox(
            {
                onStart:     function() { overlayOn(); },
                onEnd:       function() { overlayOff(); activityIndicatorOff(); },
                onLoadStart: function() { activityIndicatorOn(); },
                onLoadEnd:   function() { activityIndicatorOff(); }
            });
    }
});