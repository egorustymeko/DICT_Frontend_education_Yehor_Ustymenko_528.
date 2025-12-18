console.log("Сайт кафедри завантажено успішно!");
$(function () {
// клік по бургеру (кнопці "Меню") відкриває/закриває список
    $(".menu-toggle").on("click", function () {
        $(".nav-links").toggleClass("show");
    });


    $(".menu-link").on("click", function () {
        $(".nav-links").removeClass("show");
    });


    $(".lang-ua").on("click", function () {
        $(".lang").removeClass("is-active");
        $(".lang-ua").addClass("is-active");

        $(".language-switcher").removeClass("is-en").addClass("is-ua");
    });

    $(".lang-en").on("click", function () {
        $(".lang").removeClass("is-active");
        $(".lang-en").addClass("is-active");

        $(".language-switcher").removeClass("is-ua").addClass("is-en");
    });
    const $slickElement = $("#news .news-cards");

    if (!$slickElement.length) return;

    $slickElement.not(".slick-initialized").slick({
        slidesToShow: 4,
        slidesToScroll: 1,

        arrows: true,
        prevArrow: $("#news .news-prev"),
        nextArrow: $("#news .news-next"),
        infinite: false,
        centerMode: false,
        centerPadding: "0px",

        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
    });
});