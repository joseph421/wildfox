$(document).ready(function(){
    $('#menu li').hover(function(){
            $(this).find('ul:first').css({visibility: "visible",display: "none"}).fadeIn(400); // effect 1
            // $(this).find('ul:first').css({visibility: "visible",display: "none"}).slideDown(400); // effect 2
        },function(){
            $(this).find('ul:first').css({visibility: "hidden"});
        });
});

