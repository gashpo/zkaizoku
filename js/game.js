var gameSelection = $('.game-zone .play-game .selection')
var gameResult = $('.game-zone .play-game .result')

// 開始遊玩
$('.game-zone .default button').click(function () {
    $(this).parent().parent().addClass('play')
})


// 遊玩過程
gameSelection.find('.play').click(function () {
    var selectedRadio = gameSelection.find('input[type=radio]:checked');

    if (selectedRadio.length > 0) {
        // 骰子開始滾動
        gameResult.addClass('dicing')
        var imagePath = gameResult.find('img').attr('src')
        var newImagePath = imagePath.replace('png', 'gif')
        gameResult.find('img').attr('src', newImagePath)

        // 禁用按鈕
        $(this).attr('disabled', '')
        gameSelection.find('input').attr('disabled', '')

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

        // 隨機產生三個結果
        setTimeout(() => {
            gameResult.removeClass('dicing')
            gameResult.addClass('show')
            gameResult.find('img').each(function (index) {
                $(this).attr('src', selectedDicePaths[index])
            })
        }, 3000);

        // 彈窗顯示遊戲結果
        setTimeout(() => {
            $('#game-notice').addClass('active')
        }, 5000);
    } else {
        $(this).siblings('div').addClass('alert');
        setTimeout(() => {
            $(this).siblings('div').removeClass('alert');
        }, 1000);
    }
})


// 再玩一次
$('.replay').click(function () {
    $('.popUp').removeClass('active')
    gameSelection.find('input[type="radio"]').prop('checked', false)
    gameSelection.find('button').attr('disabled', false)
    gameSelection.find('input').attr('disabled', false)
    gameResult.removeClass('show')
    gameResult.find('img:first-child').attr('src', 'img/game/dice/dice01.png')
    gameResult.find('img:nth-child(2)').attr('src', 'img/game/dice/dice02.png')
    gameResult.find('img:nth-child(3)').attr('src', 'img/game/dice/dice03.png')
})