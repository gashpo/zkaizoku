// 捲軸向下時 header 縮小
$(window).scroll(function () {
	var scrollHeight = $(window).scrollTop();

	if (scrollHeight > 90) {
		$('header').addClass('fixed');
	} else {
		$('header').removeClass('fixed');
	}
});


// go top
$('.main-logo').click(function () {
	$('html,body').animate({ scrollTop: 0 }, 100);
});

// nav click
$('.options .nav li').click(function () {
	var attr = $(this).attr('for')

	if ($('#' + attr).length > 0) {
		var targetOffset = $('#' + attr).offset().top
		$('html,body').animate({ scrollTop: targetOffset - 150 }, 100)
	}
	else {
		location.href = attr + '.html'
	}
})