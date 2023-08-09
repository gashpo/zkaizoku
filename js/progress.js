var progress = $('#shop .progress')

if (progress.hasClass('step2')) {
    progress.find('li:first-child h5').html('<i class="icon-Check"></i>')
} else if (progress.hasClass('step3')) {
    progress.find('li:not(:last-child) h5').html('<i class="icon-Check"></i>')
}