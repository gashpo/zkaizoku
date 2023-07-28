$('#faq dt').click(function () {
	$(this).siblings().removeClass('show');
	$(this).toggleClass('show');

	var nowOffset = $(this).offset().top;
	var dlHeight = $(document).innerHeight() - $(document).innerWidth() * 0.06 - 128;
	if (nowOffset < dlHeight / 2) {
		$(this).parent().animate({
			scrollTop: 0
		}, 'slow');
	}
	if (nowOffset >= dlHeight / 2) {
		$(this).parent().animate({
			scrollTop: $(this).parent().scrollTop() + 100
		}, 'slow');
	}
})