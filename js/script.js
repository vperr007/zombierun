$(document).ready(function(){
  $( ".bck" ).switchClass( "bck", "dark", 1000 );
// $('.title').effect('shake', {times:1}, 300);

  setTimeout(function(){
    $('.title').append('<div class="subs">..from <span id="zombies">ZOMBIES<span></div>')
    .append('<div class="subs grey">A Guide to the Apocalapse</div>');
    $('.subs').wrapAll("<div class='subtitles' />").hide().fadeIn(4000);
  } ,500);

});
