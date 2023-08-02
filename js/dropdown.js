$('.dropdown').click(function () {
	$('.dropdown').not(this).removeClass('active');
	$(this).toggleClass('active');
})


// 語系下拉
$('.language ul li').click(function () {
	$(this).siblings().removeClass('active')
	$(this).addClass('active')
	$('.language button').html($(this).html())
	if ($(window).width() <= 1280) {
		$('.options').removeClass('active')
		$('.options .menu i').removeClass('icon-Close')
		$('.options .menu i').addClass('icon-List')
		$('body').css('overflow-y', 'auto')
	}
})


// 登入下拉
$('.admin ul li:last-child').click(function () {
	$('.admin').hide()
	$('.wallet').show()
	$('body').css('overflow-y', 'auto')
})
