var mediaLaptop = window.matchMedia('(max-width: 1280px)');

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


// nav click
$('.options .nav > ul > li').click(function () {
	var attr = $(this).attr('for')

	if ($('#' + attr).length > 0) {
		var targetOffset = $('#' + attr).offset().top
		if (attr === 'tutorial') {
			$('html,body').animate({ scrollTop: targetOffset + 50 }, 100)
		} else {
			$('html,body').animate({ scrollTop: targetOffset - 150 }, 100)
		}
	}
	else {
		// 語系下拉
		if (attr === 'language') {
		} else {
			location.href = attr + '.html'
		}
	}

	if (mediaLaptop.matches) {
		if (attr === 'language') {
		} else {
			$('.options').removeClass('active')
			$('.options .menu i').removeClass('icon-Close')
			$('.options .menu i').addClass('icon-List')
		}
	}
})


// 小網 menu 開關
if (mediaLaptop.matches) {
	$('.admin').removeClass('dropdown')
	$('.admin, .options').addClass('fulldown')
	$('.admin > .dropdown-content, .options > .nav').addClass('fulldown-content')
	$('.admin > .fulldown-content').removeClass('dropdown-content')
}