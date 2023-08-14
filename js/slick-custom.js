/* 輪播設定 */
$(document).ready(function () {
    /* 主視覺 */
    $('#keyvision .slick').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('#keyvision .slick').on('afterChange', function (event, slick, currentSlide) {
        var clonedSlides = $('.slick-slide.slick-cloned');
        var captions = $('.captions > div');

        captions.removeClass('active');
        if (clonedSlides.length > 0) {
            var activeIndex = currentSlide % clonedSlides.length;
            $(captions[activeIndex]).addClass('active');
        }
    });


    /* 遊戲 */
    $('#game .slick').slick({
        infinite: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
    });


    /* NFT */
    $('#nft-idx .slick').slick({
        dots: true,
        slidesToShow: 2.3,
    });
});