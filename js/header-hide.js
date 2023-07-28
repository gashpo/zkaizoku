$(document).ready(function () {
	if ($(window).width() > 1024) {
		$(window).scroll(function () {
			var scrollHeight = $(window).scrollTop();

			if (scrollHeight > 90) {
				$('header').addClass('fixed');
			} else {
				$('header').removeClass('fixed');
			}
		});
	}
	// else if ($(window).width() <= 1024) {
	// 	var prev = 0;
	// 	var $window = $(window);
	// 	var $fullCut = $('.full-cut');
	// 	var header = $('header');

	// 	$window.on('scroll', function () {
	// 		var scrollTop = $window.scrollTop();
	// 		header.toggleClass('hidden', scrollTop > prev);
	// 		prev = scrollTop;
	// 	});

	// 	$fullCut.on('scroll', function () {
	// 		var scrollTop = $fullCut.scrollTop();
	// 		header.toggleClass('hidden', scrollTop > prev);
	// 		prev = scrollTop;
	// 	});
	// }
});