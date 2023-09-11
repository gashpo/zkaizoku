// 遊玩過程
var gameSelection = $('.match-the-pirate .play-game .selection')
var gameResult = $('.match-the-pirate .play-game .result')

gameSelection.find('.play').click(function () {
    // 賭本必須為正整數
    var isPositiveInteger = /^[1-9]\d*$/.test(betsInput.val())

    // 必須選擇賭注
    var selectedRadio = gameSelection.find('input[type=radio]:checked')

    if (selectedRadio.length > 0 && isPositiveInteger && parseInt(betsInput.val()) < 301) {
        betsInput.parent().removeClass('alert')

        // 開始遊戲
        var imagePath = gameResult.find('img').attr('src')
        var newImagePath = imagePath.replace('png', 'gif')
        gameResult.find('img').attr('src', newImagePath)
        betsInput.removeClass('alert')
        betsInput.attr('disabled', '')

        // 遊戲進行中禁用網頁所有操作
        $('.full-page').addClass('active')

        // 隨機產生結果
        var dicePaths = [
            'img/game/match-the-pirate/card1.png',
            'img/game/match-the-pirate/card2.png',
            'img/game/match-the-pirate/card3.png',
            'img/game/match-the-pirate/card4.png',
            'img/game/match-the-pirate/card5.png',
            'img/game/match-the-pirate/card6.png'
        ];
        var selectedDicePaths = [];
        while (selectedDicePaths.length < 3) {
            var randomIndex = Math.floor(Math.random() * dicePaths.length);
            if (!selectedDicePaths.includes(dicePaths[randomIndex])) {
                selectedDicePaths.push(dicePaths[randomIndex])
            }
        }
        // 摋動2秒後出現結果
        setTimeout(() => {
            gameResult.removeClass('playing')
            gameResult.addClass('show')
            gameResult.find('img').each(function (index) {
                $(this).attr('src', selectedDicePaths[index])
            })
        }, 4000);

        // 彈窗顯示遊戲結果
        setTimeout(() => {
            $('#game-notice').addClass('active')
            $('#game-notice').show()
            $('.full-page').removeClass('active')
        }, 5500);
    } else {
        // 沒選賭注時跳提醒
        if (selectedRadio.length === 0) {
            $('#no-select').addClass('active')
            $(this).siblings('div').addClass('alert');
            setTimeout(() => {
                $('#no-select').removeClass('active')
                $(this).siblings('div').removeClass('alert');
            }, 3000);
        }

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
    gameSelection.find('input[type="radio"]').prop('checked', false)
    gameResult.removeClass('show')
    gameResult.find('img').attr('src', 'img/game/match-the-pirate/card.png')
    betsInput.removeAttr('disabled')
})