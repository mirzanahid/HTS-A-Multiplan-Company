//smooth scroll start

$(function () {
    var anchorScroll = $(document).AnchorScroll({
      'top': 1,
    });
    anchorScroll.on('scrollStart', function (event) {
      var target = event.target,
        settings = event.settings;

   
      if( $(window).width() < 768 ) {
        settings.center = 0;
      }

    });
    anchorScroll.on('scrollEnd', function (event) {
      var target = event.target;

    
    });
  });
//smooth scroll end


//sticky navbar start

$(window).scroll(function(){
    $scrollamout = $(window).scrollTop();
    
    if($scrollamout > 700){
      $(".menu").addClass("sticky")
    }else{
      $(".menu").removeClass("sticky")
    }
  
  
  });
  
  $(".navbar-collapse a").click(function(){
    $(".navbar-collapse").collapse('hide')
  })
  
  $(".why_chose_link").click(function(){
    $(".menu").removeClass("sticky")
    });
 
//sticky navbar end

//load modal start

$(window).on('load',function(){
  setTimeout(function(){
    $('#loadmodal').modal('show')
  }, 500);
});

//load modal end