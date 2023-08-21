// 捲軸向下滾動時 header 縮小
if ($(window).width() > 1280) {
	$(window).scroll(function () {
		var scrollHeight = $(window).scrollTop();

		if (scrollHeight > 90) {
			$('header').addClass('fixed');
		} else {
			$('header').removeClass('fixed');
		}
	});
}


// 左上角 logo click
$('.main-logo').click(function () {
	$('html,body').animate({ scrollTop: 0 }, 100);

	if (mediaLaptop.matches) {
		$('.fulldown').removeClass('active')
		$('body').css('overflow-y', 'auto')
	}
});


// 小網 menu 開關
if (mediaLaptop.matches) {
	$('.admin').removeClass('dropdown')
	$('.admin, .options').addClass('fulldown')
	$('.admin > .dropdown-content, .options > .nav').addClass('fulldown-content')
	$('.admin > .fulldown-content').removeClass('dropdown-content')
}