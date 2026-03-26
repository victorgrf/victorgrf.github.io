var timeCont = 0;
var perTime  = 30;

$(document).ready(() => {
    var oldScrollPercent = 0;
    
    let tick = () => {
        const currY         = $(window).scrollTop();
        const windowHeight  = $(window).height();
        const scrollHeight  = $('body').height();
        const scrollPercent = (currY / (scrollHeight - windowHeight)) * 100;

        if(scrollPercent === oldScrollPercent) {
            if(0 < scrollPercent && scrollPercent < 5) {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#section-1").offset().top
                }, 200);
            }
            if(20 < scrollPercent && scrollPercent < 30) {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#section-2").offset().top
                }, 200);
            }
            if(45 < scrollPercent && scrollPercent < 55) {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#section-3").offset().top
                }, 200);
            }
            if(70 < scrollPercent && scrollPercent < 80) {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#section-4").offset().top
                }, 200);
            }
            if(95 < scrollPercent && scrollPercent < 100) {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#section-5").offset().top
                }, 200);
            }
        }
        oldScrollPercent = scrollPercent;

        timeCont += 1;
        if (timeCont == perTime) {
            timeCont = 0;
            perTime  = 100;

            switch (scrollPercent) {
                case 0:
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $("#section-2").offset().top
                    }, 800);
                    break;
                case 25:
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $("#section-3").offset().top
                    }, 800);
                    break;
                case 50:
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $("#section-4").offset().top
                    }, 800);
                    break;
                //case 75:
                    //$([document.documentElement, document.body]).animate({
                        //scrollTop: $("#section-5").offset().top
                    //}, 800);
                    //break;
                case 100:
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $("#section-1").offset().top
                    }, 1200);
                    break;
            }
        }
        setTimeout(tick, 400);
        console.log(timeCont);
    }

    $(window).on( "scroll", function () {
        timeCont = 0;
    } )

    tick()
})
