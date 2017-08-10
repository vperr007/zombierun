$(document).ready(function(){

});

$(document).ready(function(){
// $('.title').effect('shake', {times:1}, 300);

$(".title").fitText(0.2, { minFontSize: '140px', maxFontSize: '440px' });
$(".howtoprepare").fitText(1.2, { minFontSize: '35px', maxFontSize: '65px' });
$("h3").fitText(2.2, { minFontSize: '20px', maxFontSize: '90px' });


  setTimeout(function(){
    $('.title').append('<div class="subs">..from <span id="zombies">ZOMBIES<span></div>')
    .append('<div class="subs grey">A Guide to the Apocalapse</div>');
    $('.subs').wrapAll("<div class='subtitles' />").hide().fadeIn(4000);
  } ,500);

  // $('li').append('|');
  //used | instead of bullet points to seperate li items
  $('.menulinks li').not(':last-child').append(' |').css({
    'color':'#8d4d0c', //$yuck color
    'font-weight':'bold'
  });

  $('.prep li').not(':last-child').append(' |').css({
    'color':'#8d4d0c', //$yuck color
    'font-weight':'bold'
  });

// $('.nav ul li a#zom').hover()
//   $('.nav ul li a#eye.eye').css({'color':'green'});
//
// ;



$('a[href="#"]').click(function(e){
  alert('Coming Soon!');
  e.preventDefault();
});

});


$(".download").click(function(){
 var href = $('.downloadLink').attr('href');
 window.location.href = href;
});


//fittext
(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
