






$(function () {
    $(window).scroll(function (){
        var scroll = $(this).scrollTop();

        if(scroll > 200){
            $('#top').fadeIn();
        }
        else{
            $('#top').fadeOut();
        }
    })
    $('#top').click(function (){
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })
});



$(function () {
    var $links = $('.menu a');
  
    $links.click(function (e){
        e.preventDefault()
  $links.removeClass('active');
  
        var id = $(this).addClass('active').attr('href');
      
        var target = $(id).offset().top -60;
        
  
        $('html, body').animate({
            scrollTop: target
        }, 1000)
    })
  
    $(window).scroll(function (){
  
      var scroll = $(this).scrollTop();
  
      $links.each(function (){
          var target = $(this).attr('href');
          var selector = $(target).offset().top -150; 
  
          if(scroll >= selector){
              $links.removeClass('active')
              $(this).addClass('active')
          }
      })
  
    })
  });