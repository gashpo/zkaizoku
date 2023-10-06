$('.btn-copy').click(function () {
    $(this).find('i').removeClass('icon-Copy')
    $(this).find('i').addClass('icon-Check')
    $(this).find('i').css('color', '#4D9D40')
    $(this).css('cursor', 'default')

    setTimeout(() => {
        $(this).find('i').removeClass('icon-Check')
        $(this).find('i').addClass('icon-Copy')
        $(this).find('i').removeAttr('style')
        $(this).removeAttr('style')
    }, 3000);
})