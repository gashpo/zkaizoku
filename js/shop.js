var progress = $('#shop .progress')

// 步驟切換
$('.step1 .submit').click(function () {
    progress.find('li:first-child h5').html('<i class="icon-Check"></i>')
    progress.removeClass('step1')
    progress.addClass('step2')
    $('.product-detail.step1').removeClass('active')
    $('.product-detail.step2').addClass('active')
})

$('.step2 .prev-step').click(function () {
    progress.find('li:first-child h5').html('1')
    progress.removeClass('step2')
    progress.addClass('step1')
    $('.product-detail.step2').removeClass('active')
    $('.product-detail.step1').addClass('active')
})

$('#failed .submit').click(function () {
    progress.find('li:nth-child(2) h5').html('<i class="icon-Check"></i>')
    progress.removeClass('step2')
    progress.addClass('step3')
    $('.product-detail.step2').removeClass('active')
    $('.product-detail.step3').addClass('active')
})