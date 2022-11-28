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
    $('.owl-index-custom').owlCarousel({
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
    $('.owl-bus-detail-custom').owlCarousel({
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
                items: 1
            },
            1000: {
                items: 1
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
        item.style.backgroundColor = color_route[Rand(0, 5)];
    }


    let check_is_ticket_page = false
    for (const item of $("#price-per-seat")) {
        check_is_ticket_page = true
    }
    if (check_is_ticket_page) {
        let priceSeat = $("#price-per-seat").val()
        $(".check-seat-choose").change(function () {
            let numTicket = 0
            for (const item of $(".check-seat-choose")) {
                if (item.checked) {
                    numTicket++
                }
            }
            // console.log(numTicket);
            let allPrice = numTicket * Number(priceSeat);
            allPrice = parseFloat(allPrice).toLocaleString(window.document.documentElement.lang);
            $(".all-money").html(
                `${allPrice}đ`
            )
        })
        $("#select-pick").change(function () {
            if ($(this).val() == "in_hotel") {
                $(".hotel-pick").removeClass("d-none")
            }else{
                $(".hotel-pick").addClass("d-none")
            }
        })
    }
});


function changeImage(element) {
    let main_prodcut_image = document.getElementById('main_product_image');
    main_prodcut_image.src = element.src;
}