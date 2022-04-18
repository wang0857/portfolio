

$(document).ready(function(){

    // Slide Show
    var index = 1;
    showSlide(index);

    // Next/Previous Control
    $(".prev").click(() => {
        showSlide(index += -1);
    });

    $(".next").click(() => {
        showSlide(index += 1);
    });

    // Numbers Control
    $(".number-index").eq(0).click(() => {
        showSlide(index = 1);
    });

    $(".number-index").eq(1).click(() => {
        showSlide(index = 2);
    });

    $(".number-index").eq(2).click(() => {
        showSlide(index = 3);
    });

    $(".number-index").eq(3).click(() => {
        showSlide(index = 4);
    });

    $(".number-index").eq(4).click(() => {
        showSlide(index = 5);
    });

    $(".number-index").eq(5).click(() => {
        showSlide(index = 6);
    });


    // Thumbnails Control
    $(".thumbnail").eq(0).click(() => {
        showSlide(index = 1);
    });

    $(".thumbnail").eq(1).click(() => {
        showSlide(index = 2);
    });

    $(".thumbnail").eq(2).click(() => {
        showSlide(index = 3);
    });

    $(".thumbnail").eq(3).click(() => {
        showSlide(index = 4);
    });

    $(".thumbnail").eq(4).click(() => {
        showSlide(index = 5);
    });

    $(".thumbnail").eq(5).click(() => {
        showSlide(index = 6);
    });

    // Show Slides function
    function showSlide (n) {
        let slide = $(".slide");
        let thumbnail = $(".thumbnail");
        let numberIndex = $(".number-index")

        if ( n >= slide.length) {index = 0;}
        if ( n < 0) {index = slide.length-1;}

        slide.eq(n-1).addClass("slideActive").siblings().removeClass("slideActive");
        thumbnail.eq(n-1).addClass("thumbnailActive").siblings().removeClass("thumbnailActive");
        numberIndex.eq(n-1).addClass("numberActive").siblings().removeClass("numberActive");
    }


    //Auto play slideshow
    var timer = undefined;

    setTimer = () => {
        timer = setInterval(
            () => {
                function plusSlide (n) {
                    showSlide (index += 1);
                }

                plusSlide();
            }, 8000
        );
    }

    setTimer();



    // No function Notice
    noService = () => alert("No Service Now.");
});