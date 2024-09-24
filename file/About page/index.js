$(document).ready(function(){
    $('#Search').click(function(){
        $('.input').toggle();
    });
    $(window).on('scroll',function(){
      if($(this).scrollTop() > 5){
        $('#header').css('background','white');
      }else{
        $('#header').css('background','none');
      }
    });
});