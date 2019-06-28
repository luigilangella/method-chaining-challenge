$(document).ready(function() {
 

 $('.bottom_button').on('mouseenter', function(){
  $('.bottom_button').removeClass('makeBorder');
  $('.bottom_button').addClass('makeRed');
 });
 $('.bottom_button').on('mouseleave', function(){
  $('.bottom_button').removeClass('makeRed');
  $('.bottom_button').addClass('makeBorder');
 });
 $('.bottom_button').on('click', function() {
     $('.card_para').slideToggle();
 });


}); 
