// license
if ($('.license').hasClass('coming-soon')) {
    $('.license button').attr('disabled', '')
}


// 積分幣
$('.zkz .value span').each(function () {
    if ($(this).text().length > 6) {
        $(this).css('font-size', '1rem')
    }
})

$('#withdraw .submit').click(function () {
    var inputPrice = $(this).parent().siblings('.popUp--content').find('[name=price]').val()

    if (parseInt(inputPrice) > 300) {
        $('#overtake').addClass('active')
        setTimeout(() => {
            $('#overtake').removeClass('active')
        }, 5000);
    } else {
        $(this).parent().siblings('h3').html('提領完成')

        $(this).parent().parent().find('[for=price]').html('本次提領數量')

        $(this).parent().parent().find('[name=price]').attr('disabled', '')

        $(this).html('確認')
        $(this).click(function () {
            $('.popUp').removeClass('active')
            $('.popUp').hide()
            $('body').css('overflow-y', 'auto')
        })

        $(this).siblings('.close').html('查看提領紀錄')
        $(this).siblings('.close').click(function () {
            $('.popUp').removeClass('active')
            $('.popUp').hide()
            $('body').css('overflow-y', 'auto')

            var recordOffset = $('.record').offset().top
            $('html,body').animate({ scrollTop: recordOffset - 120 }, 100)
        })
    }
})


// 歷史紀錄
if (mediaPad.matches) {
    $('table tbody tr').each(function () {
        $(this).find('td:not(.record-status)').each(function (index) {
            var thText = $(this).parent().parent().parent().parent().find('thead th').eq(index).text()
            $(this).find('span').html(thText)
        });
    });

    $('.record-view button').html($('.record-view button').html() + $('.record table th:last-child').html())
}