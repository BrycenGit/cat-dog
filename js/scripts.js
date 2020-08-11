$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#dog").prepend("<li>BARK!</li>");
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#bark").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
  });
  
});