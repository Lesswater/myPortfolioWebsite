(function() {


  $("#education").hide();
  $("#about").hide();
  $("#exp").hide();
  $("#interests").hide();

  /*$(document).ready(function(){
    $("#menuIcon").hover(function(){
      $("#education").fadeToggle();
      $("#about").fadeToggle();
      $("#exp").fadeToggle();
      $("#interests").fadeToggle();
      if( $("#education").hover() == true){
        $("#education").show();
      }
    });
  });*/

  $(document).ready(function(){
    $("#menu").hover(function(){
      $("#education").fadeToggle();
      $("#about").fadeToggle();
      $("#exp").fadeToggle();
      $("#interests").fadeToggle();
    });
  });
})();