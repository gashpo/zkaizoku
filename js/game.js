var betsInput = $('.content input[name="bets"]')

// 開始遊玩
$('.game-zone .default button').click(function () {
    $(this).parent().parent().parent().addClass('play')
})