function Rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


$(document).ready(function () {
    // SET UP MIN DATE
    {
        let index = 0;
        for (const item of $("#index-date-pick")) {
            index++;
        }
        if (index != 0) {
            let date = new Date();
            let dateObj = {
                day: date.getDate(),
                month: date.getMonth() + 1,
                year: date.getFullYear(),
            }
            $("#index-date-pick").attr("min", `${dateObj.year}-${dateObj.month}-${dateObj.day}`)
        }
    }

    //SET UP CAROUSEL AND SELECT
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
    $('.search-select').select2();


    //
    const color_popular_route_bg = {
        color1: "rgb(198, 50, 78)",
        color2: "rgb(158, 148, 124)",
        color3: "rgb(76, 108, 140)",
        color4: "rgb(211, 178, 145)",
        color5: "rgb(88, 82, 121)",
        color6: "rgb(138, 155, 180)",
    }
    const color_route = [
        color_popular_route_bg.color1,
        color_popular_route_bg.color2,
        color_popular_route_bg.color3,
        color_popular_route_bg.color4,
        color_popular_route_bg.color5,
        color_popular_route_bg.color6,
    ]


    for (const item of $(".index-popular-route .card-body")) {
        item.style.backgroundColor = color_route[Rand(0,5)];
    }





















});