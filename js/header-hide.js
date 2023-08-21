if (mediaPad.matches) {
	$(window).scroll(function () {
		var scrollHeight = $(window).scrollTop();

		if (scrollHeight > 90) {
			$('header').addClass('fixed');
		} else {
			$('header').removeClass('fixed');
		}
	});
}