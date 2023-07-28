$(".master1").on({
  mouseenter: function () {
    console.log('hello');
    $('.master2, .master3').addClass('widthlow');
    $('.master1').addClass('widthmax');
    $(".widthmax").addClass('opacity');
  },
  mouseleave: function () {
    $('.master2, .master3').removeClass('widthlow');
    $('.master1').removeClass('widthmax');
    $('.master1').removeClass('opacity');
  }
});

$(".master2").on({
  mouseenter: function () {
    console.log('hello');
    $('.master1, .master3').addClass('widthlow');
    $('.master2').addClass('widthmax');
    $('.widthmax').addClass('opacity');
  },
  mouseleave: function () {
    $('.master1, .master3').removeClass('widthlow');
    $('.master2').removeClass('widthmax');
    $('.master2').removeClass('opacity');
  }
});

$(".master3").on({
  mouseenter: function () {
    console.log('hello');
    $('.master1, .master2').addClass('widthlow');
    $('.master3').addClass('widthmax');
    $('.widthmax').addClass('opacity');
  },
  mouseleave: function () {
    $('.master1, .master2').removeClass('widthlow');
    $('.master3').removeClass('widthmax');
    $('.master3').removeClass('opacity');
  }
});