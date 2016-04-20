$(document).ready(function() {

    $('#fullpage').fullpage({
        anchors:['home','about', 'work','contact'],
        keyboardScrolling: true,
        scrollOverflow: true,
        onLeave : function(){
            $(".main-menu").addClass("hide-menu");
        }
    });

    $('.slider').slick({  dots: true, arrows : false });

    $(".btn-toggle-menu").click(function() {
        $(".main-menu").toggleClass("hide-menu");
    })

});