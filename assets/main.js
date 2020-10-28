// console.log('hello');
$(document).ready(function(){

// PRIMO DROPDOWN MENU
    $('.first-drop').mouseenter(function(){
        $('.dropdown-container-one').toggle();

    });

    $('.first-drop').mouseleave(function(){
        $('.dropdown-container-one').toggle();
    });

// SECONDO DROPDOWN MENU
    $('.second-drop').mouseenter(function(){
        $('.dropdown-container-two').toggle();
    });
    $('.second-drop').mouseleave(function(){
        $('.dropdown-container-two').toggle();
    });

    // TERZO DROPDOWN MENU
    $('.third-drop').mouseenter(function(){
        $('.dropdown-container-three').toggle();
    });
    $('.third-drop').mouseleave(function(){
        $('.dropdown-container-three').toggle();
    });
















});
