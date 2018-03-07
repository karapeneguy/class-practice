$(document).ready(function(){
    alert("working?");
     if ($(".about").slideToggle("visible")) {
        $(".show").html("Show Less");
    } else {
        $(".show").html("Show More");
    }
    

    $(".buttonabout").click(function(){
        alert("working!");
        //$(this).next().slideToggle();
    }
     
   
});