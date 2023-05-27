$(document).ready(function(){
    // Assuming you're using a plugin or script that adds 'active' class to active slide
    $('.slide').on('classChange', function() {
        console.log("classchange")
        if($(this).hasClass('data-active')) {
            console.log("if")
            $('.slide3-slide-title', this).addClass('.slide3-slide-title-active');
            $('.slide3-slide-description', this).addClass('.slide3-slide-description-active');
            $('.slide3-slide-image', this).addClass('.slide3-slide-image-active');
        } else {
            console.log("else")
            $('.slide3-slide-title', this).removeClass('.slide3-slide-title-active');
            $('.slide3-slide-description', this).removeClass('.slide3-slide-description-active');
            $('.slide3-slide-image', this).removeClass('.slide3-slide-image-active');
        }
    });
});