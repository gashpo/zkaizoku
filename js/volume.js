var allLvs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var currentLv = $('#target').html() - 1

$(function () {
    $("#slider-range-max").slider({
        range: "max",
        min: 0,
        max: 9,
        value: currentLv,
        slide: function (event, ui) {
            SetLvValues(ui.value);
        }
    });
    SetLvValues(currentLv);
});

function SetLvValues(index) {
    var cost = Getcost(index);
    $("#target").text(allLvs[index]);
    $("#costZKZ").val(cost);
}

function Getcost(index) {
    var p = (allLvs[index] - currentLv - 1) * 50;
    return p;
}