var gameSelection = $('.game-zone .play-game .selection')
var gameResult = $('.game-zone .play-game .result')

// 開始遊玩
$('.game-zone .default button').click(function () {
    $(this).parent().parent().parent().addClass('play')
})


// 遊玩過程
gameSelection.find('.play').click(function () {
    var selectedRadio = gameSelection.find('input[type=radio]:checked')
    var betsInput = $('.content input[name="bets"]')

    if (selectedRadio.length > 0 && betsInput.val() != '') {
        // 骰子開始滾動
        gameResult.addClass('dicing')
        var imagePath = gameResult.find('img').attr('src')
        var newImagePath = imagePath.replace('png', 'gif')
        gameResult.find('img').attr('src', newImagePath)
        betsInput.removeClass('alert')

        // 遊戲進行中禁用網頁所有操作
        $('.full-page').addClass('active')

        // 隨機產生三個結果
        var dicePaths = [
            'img/game/dice/dice01.png',
            'img/game/dice/dice02.png',
            'img/game/dice/dice03.png',
            'img/game/dice/dice04.png',
            'img/game/dice/dice05.png',
            'img/game/dice/dice06.png'
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
            gameResult.removeClass('dicing')
            gameResult.addClass('show')
            gameResult.find('img').each(function (index) {
                $(this).attr('src', selectedDicePaths[index])
            })
        }, 2000);

        // 彈窗顯示遊戲結果
        setTimeout(() => {
            $('#game-notice').addClass('active')
            $('.full-page').removeClass('active')
        }, 4000);
    } else {
        // 沒選賭注時跳提醒
        if (selectedRadio.length === 0) {
            $(this).siblings('div').addClass('alert');
            setTimeout(() => {
                $(this).siblings('div').removeClass('alert');
            }, 1000);
        }

        // 沒填賭本時跳提醒
        if (betsInput.val() === '') {
            betsInput.removeClass('alert')
            setTimeout(() => {
                betsInput.addClass('alert')
            }, 1);
        } else {
            betsInput.removeClass('alert')
        }
    }
})


// 再玩一次
$('.replay').click(function () {
    $('.popUp').removeClass('active')
    gameSelection.find('input[type="radio"]').prop('checked', false)
    gameResult.removeClass('show')
    gameResult.find('img:nth-child(1)').attr('src', 'img/game/dice/dice01.png')
    gameResult.find('img:nth-child(2)').attr('src', 'img/game/dice/dice02.png')
    gameResult.find('img:nth-child(3)').attr('src', 'img/game/dice/dice03.png')
})