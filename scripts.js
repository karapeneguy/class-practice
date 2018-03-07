var hide = "Less Information";
var show = "History";



$(document).ready(function () {
   
    
    $(".buttonclick").click(function () {
        $(this).next().slideToggle();
        $(this).next().next().slideToggle();

        $(this).toggleClass("open");

        if ($(this).hasClass("open")) {
            $(this).html(hide);
        } else {
            $(this).html(show);
        }
    });
    
     });
  
