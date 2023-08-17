$('.btn-copy').click(function () {
    $(this).find('i').removeClass('icon-Copy')
    $(this).find('i').addClass('icon-Check')
    $(this).find('i').css('color', '#4D9D40')

    setTimeout(() => {
        $(this).find('i').removeClass('icon-Check')
        $(this).find('i').addClass('icon-Copy')
        $(this).find('i').css('color', '')
    }, 3000);
})