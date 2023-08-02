$('.fulldown >button').click(function () {
    $('.fulldown').not($(this).parent()).removeClass('active');
    $(this).parent().toggleClass('active');

    // 隱藏 body 捲軸
    if (!$('.fulldown').hasClass('active')) {
        $('body').css('overflow-y', 'auto');
    } else {
        $('body').css('overflow-y', 'hidden')
    }
})