$(document).ready(function() {
   $(window).scroll(function(event) {
      var body = $('html,body').scrollTop();
      if(body>90){
         $('.navbar').addClass('navbar-fixed');
         $(".icon").css("bottom", "-20px");
      }
      else {
         $('.navbar').removeClass('navbar-fixed');
         $(".icon").css("bottom", "10px");
      }
   });
});