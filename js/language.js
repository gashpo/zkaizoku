$('.language').click(function () {
	$(this).toggleClass('show')
})

$('.language ul li').click(function () {
	$(this).siblings().removeClass('active')
	$(this).addClass('active')
	$('.language span').html($(this).html())
})