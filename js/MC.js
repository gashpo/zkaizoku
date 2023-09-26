// 輪盤設定
let wheel = $('.wheelBody')
let contentCon = $('.wheelContent')
let length, preAngle
let starAngle = 0
let giftBox = []
let data = []
let url = 'vendor/lucky-wheel/db.json'


let shuffle = function (a, b) {
    let num = Math.random() > 0.5 ? -1 : 1
    return num
}

let showGift = function (r) {
    $('.pattern')
        .eq(r)
        .addClass('picked')
    $('.wheelContent .inner')
        .eq(r)
        .addClass('picked')
}

let handRotate = function (gift, second) {
    let goAngle = starAngle + 1440 + gift * preAngle - (starAngle % 360)
    starAngle = goAngle
    $('.hand').css({
        transition: `${second}ms`,
        transform: `rotate(${goAngle}deg)`,
    })
    setTimeout(function () {
        showGift(gift)
        showNum()
        $('.hand').on('click', clickHandler)
    }, second)
}




// 遊玩過程
var gameSelection = $('.MC .play-game .selection')
var gameResult = $('.MC .play-game .result')


let clickHandler = function () {
    $('.hand').off('click')
    // 賭本必須為正整數
    var isPositiveInteger = /^[1-9]\d*$/.test(betsInput.val())

    // 必須選擇賭注
    var selectedRadio = gameSelection.find('input[type=radio]:checked')

    if (selectedRadio.length > 0 && isPositiveInteger && parseInt(betsInput.val()) < 301) {
        betsInput.parent().removeClass('alert')

        // 開始遊戲
        betsInput.removeClass('alert')
        betsInput.attr('disabled', '')

        if (giftBox.length == 0) {
            init()
            $('.hand').on('click', clickHandler)
        } else {
            let gift = giftBox.sort(shuffle).pop()
            // data[gift].num--
            handRotate(gift, 3000)
        }

        // 遊戲進行中禁用網頁所有操作
        $('.full-page').addClass('active')

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
}


// 項目渲染
let init = function () {
    starAngle = 0
    giftBox = []
    wheel.html('<div class="hand"><img src="img/game/MC/hand.png" /></div>')
    contentCon.html('')
    $('.hand').css({
        transition: 'unset',
        transform: 'unset',
    })
    $.get(url, function (res) {
        data = res
        data.forEach((item, index) => {
            preAngle = 360 / data.length
            let patternAngle = preAngle / -2 + index * preAngle
            let pattern = $('<div class="pattern"></div>')
            let inner = $('<div class="inner"></div>')
            let content = $(
                `<div class="inner">${item.img}</div>`
            )

            pattern.css('transform', `rotate(${patternAngle}deg)`)
            inner.css('transform', `rotate(${preAngle}deg)`)
            content.css('transform', `rotate(${index * preAngle}deg)`)
            pattern.append(inner)
            wheel.append(pattern)
            contentCon.append(content)

            for (let i = 0; i < item.num; i++) {
                giftBox.push(index)
            }
        })
    })
    $('.play').on('click', clickHandler)
}

init()



// 再玩一次
$('.replay').click(function () {
    $('.popUp').removeClass('active')
    gameSelection.find('input[type="radio"]').prop('checked', false)
    gameResult.removeClass('show')
    betsInput.removeAttr('disabled')
    $('.pattern').removeClass('picked')
    $('.wheelContent .inner').removeClass('picked')
})