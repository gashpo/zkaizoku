// 遊玩過程
var gameSelection = $('.IC .play-game .selection')
var gameResult = $('.IC .play-game .result')

gameSelection.find('.play').click(function () {
    // 賭本必須為正整數
    var isPositiveInteger = /^[1-9]\d*$/.test(betsInput.val())

    if (isPositiveInteger && parseInt(betsInput.val()) < 301) {
        betsInput.parent().removeClass('alert')

        // 開始遊戲
        betsInput.removeClass('alert')
        betsInput.attr('disabled', '')

        // 遊戲進行中禁用網頁所有操作
        $('.full-page').addClass('active')

        // 滾動2秒後出現結果
        setTimeout(() => {
            gameResult.removeClass('playing')
            gameResult.addClass('show')
        }, 4000);

        // 彈窗顯示遊戲結果
        setTimeout(() => {
            $('#game-notice').addClass('active')
            $('#game-notice').show()
            $('.full-page').removeClass('active')
        }, 5500);
    } else {
        // 沒填賭本或賭本填錯時跳提醒
        if (betsInput.val() === '') {
            $('#no-value').addClass('active')
            setTimeout(() => {
                $('#no-value').removeClass('active')
            }, 3000)

            betsInput.parent().removeClass('alert')
            setTimeout(() => {
                betsInput.parent().addClass('alert')
            }, 1);
        } else if (parseInt(betsInput.val()) > 300) {
            $('#exceed').addClass('active')
            setTimeout(() => {
                $('#exceed').removeClass('active')
            }, 3000)

            betsInput.parent().removeClass('alert')
            setTimeout(() => {
                betsInput.parent().addClass('alert')
            }, 1);
        } else if (!isPositiveInteger) {
            $('#wrong-value').addClass('active')
            setTimeout(() => {
                $('#wrong-value').removeClass('active')
            }, 3000)

            betsInput.parent().removeClass('alert')
            setTimeout(() => {
                betsInput.parent().addClass('alert')
            }, 1)
        } else {
            betsInput.parent().removeClass('alert')
        }
    }
})


// 再玩一次
$('.replay').click(function () {
    $('.popUp').removeClass('active')
    gameResult.removeClass('show')
    betsInput.removeAttr('disabled')
})