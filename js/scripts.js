$(document).ready(function() {
  $(".clickable").click(function() {
    $("#raccoon-showing").fadeToggle(1000);
    $("#raccoon-hidden").fadeToggle(1000);
  });
});
