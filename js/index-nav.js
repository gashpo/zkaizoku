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
    } else {
        if (attr === 'twitter') {
            console.log('twitter')
            window.open('https://twitter.com/ZKaizoku_')
        } else if (attr != 'language' && attr != 'bridge') { // Bridge & 語系下拉
            location.href = attr + '.html'
        }
    }

    if (mediaLaptop.matches) {
        if (attr != 'language' && attr != 'bridge') {
            $('.options').removeClass('active')
            $('.options .menu i').removeClass('icon-Close')
            $('.options .menu i').addClass('icon-List')
        }
    }
})