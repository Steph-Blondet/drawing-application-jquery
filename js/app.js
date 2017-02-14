//Problem: No user interaction causes no change to application
//Solution: When user interacts cause change properly.

var color = $(".selected").css("background-color");

//When clicking on control list items
$(".controls li").click(function(){
    //Deselect siblings elements
    $(this).siblings().removeClass("selected");
    //Select clicked element
    $(this).addClass("selected");
    //cache current color
    color = $(this).css("background-color");
});



//When new color is pressed
    //Show color select or hide the color select


//When color cliders change
    //update the new color span


//When add color is pressed
    //append the color to the controls ul
    //select the new color


//On mouse events on the canvas
    //Draw lines
