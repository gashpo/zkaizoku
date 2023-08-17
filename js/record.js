var mediaPad = window.matchMedia('(max-width: 1024px)')

if (mediaLaptop.matches) {
    $('table tbody tr').each(function () {
        $(this).find('td:not(.record-status)').each(function (index) {
            var thText = $(this).parent().parent().parent().parent().find('thead th').eq(index).text()
            $(this).find('span').html(thText)
        });
    });

    $('.record-view button').html($('.record-view button').html() + $('.record table th:last-child').html())
}