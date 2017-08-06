$(document).ready(function(){
  $( ".bck" ).switchClass( "bck", "dark", 1000 );
// $('.title').effect('shake', {times:1}, 300);

  setTimeout(function(){
    $('.title').append('<div class="subs">..from <span id="zombies">ZOMBIES<span></div>')
    .append('<div class="subs grey">A Guide to the Apocalapse</div>');
    $('.subs').wrapAll("<div class='subtitles' />").hide().fadeIn(4000);
  } ,500);

  // $('li').append('|');
  //used | instead of bullet points to seperate li items
  $('li').not(':last-child').append(' |').css({
    'color':'#8d4d0c', //$yuck color
    'font-weight':'bold'
  });

$('a[href="#"]').click(function(e){
  alert('Coming Soon!');
  e.preventDefault();
});

});
