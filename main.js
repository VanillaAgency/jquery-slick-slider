function changeBGColor(slideId) {
  switch(slideId) {
    case 1:
      return "rgba(0, 0, 0, 0) -webkit-linear-gradient(rgb(50, 102, 255) 0%, rgb(3, 17, 52) 100%) repeat scroll 0% 0%";
    case 2:
      return "rgba(0, 0, 0, 0) -webkit-linear-gradient(rgb(39, 227, 198) 0%, rgb(39, 174, 225) 25%, rgb(39, 133, 231) 50%, rgb(84, 36, 199) 75%, rgb(3, 17, 52) 100%) repeat scroll 0% 0%";
    case 3:
      return "rgba(0, 0, 0, 0) -webkit-linear-gradient(rgb(223, 195, 197) 0%, rgb(255, 147, 147) 25%, rgb(248, 102, 85) 50%, rgb(132, 39, 28) 75%, rgb(3, 17, 52) 100%) repeat scroll 0% 0%";
    case 4:
      return "rgba(0, 0, 0, 0) -webkit-linear-gradient(rgb(175, 89, 211) 0%, rgb(209, 172, 105) 33%, rgb(62, 193, 183) 66%, rgb(116, 137, 216) 100%) repeat scroll 0% 0%";
    case 5:
      return "rgba(0, 0, 0, 0) -webkit-linear-gradient(rgb(255, 105, 150) 0%, rgb(255, 147, 147) 25%, rgb(221, 134, 255) 50%, rgb(123, 93, 253) 75%, rgb(3, 17, 52) 100%) repeat scroll 0% 0%";
    default:
      return "";
  }
}

$(document).ready(function() {
  $('.lighting-image-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    focusOnSelect: true,
    autoplaySpeed: 1000,
    speed: 50,
    fade: true,
    arrows: false,
  });

  $('.lighting-image-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.lighting-wrapper').css('background', `${changeBGColor(nextSlide+1)}`);
    $(`.lighting-info`).removeClass("active");
    $(`.lighting-info.item-${nextSlide+1}`).addClass("active");
  });

  $( ".lighting-info" ).mouseenter(function (event) {
    const slideno = $(event.currentTarget).data('slide');
    console.log(slideno)
    $('.lighting-image-slider').slick('slickGoTo', slideno - 1, true);
  })
});
