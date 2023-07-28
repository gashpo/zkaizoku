$('.tab li').click(function () {
    var index = $(this).index();

    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    $(this).parent().siblings('.tab-content').find('li').removeClass('active');
    $(this).parent().siblings('.tab-content').find('li').eq(index).addClass('active');
});