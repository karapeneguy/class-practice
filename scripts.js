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
    
    
    
    
    //Below is the code in order to allow the paintbrush to be dragged across the screen. I followed instructions via W3 School. 
    
    
    dragElement(document.getElementById(("mydiv")));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    document.getElementById(elmnt.id ).onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
    
    
    
    
     });
  
