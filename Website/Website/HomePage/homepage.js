$('document').ready(function() {
    let $slides = $('.slides')
    let $slideImg = $('.slide-img')

    let totalSlides = $slideImg.length
    let slideWidth = $slideImg.width()
    let transSpeed = 1000 //ms
    let delay = 2250 //ms
    let idx = 0

    $slides.css({
        width: totalSlides * slideWidth + 'px'
    })

    setInterval(function() {
        if(idx == totalSlides){
            idx = 0
            $slides.css({
                marginLeft: 0
            })
        }

        $slides.animate({
            'margin-left': -slideWidth * idx
        }, transSpeed)
        idx++;
    }, delay)
})