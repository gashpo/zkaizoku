$('.popUp--open').click(function () {
    let value = $(this).attr('for')
    $('.popUp#' + value).addClass('active')
    $('.popUp#' + value).show()
    $('body').css('overflow', 'hidden')
})

$('.popUp--close').click(function () {
    $('.popUp').removeClass('active')
    $('.popUp').hide()
    $('body').css('overflow-y', 'auto')
})