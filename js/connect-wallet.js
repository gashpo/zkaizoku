// 連接錢包後，右上角個人資訊切換為下拉選單
$('#login ul li:first-child').click(function () {
    $('.popUp').removeClass('active')
    $('.popUp').hide()
    $('body').css('overflow-y', 'auto')
    $('.wallet').hide()
    $('.admin').show()
})