// console.log('hello');
$(document).ready(function(){

/*
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

    // QUARTO DROPDOWN MENU
    $('.fourth-drop').mouseenter(function(){
        $('.dropdown-container-four').toggle();
    });
    $('.fourth-drop').mouseleave(function(){
        $('.dropdown-container-four').toggle();
    });
*/

// FACCIO UNA PROVA PER UNIFICARE TUTTE QUESTE FUNZIONI


    $('#special-menu > li').mouseenter(function(){
            $(this).children(".select").addClass('show-me');

    });
    $('#special-menu > li').mouseleave(function(){
            $(this).children(".select").removeClass('show-me');

    });

/*SECONDA SOLUZIONE
    $('#special-menu > li > a').mouseenter(function(){
            $(this).next("div").addClass('show-me');

    });
    $('#special-menu > li > a').mouseleave(function(){
            $(this).next("div").removeClass('show-me');

    });
*/

});
