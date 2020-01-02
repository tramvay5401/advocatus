$(function() {
    $('.clients__inner').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        dotsClass: 'slick-dots slider__dots',
        customPaging: function(slick, index) {
          var image = $(slick.$slides[index]).find('.slider__img').attr('src');
          return '<img src="' + image + '" alt="" /> '
        }
      });
});


$(".header__burger").on('click', function(event){
  $('.header__burger,.header__menu').toggleClass('active');
});

$('.product__content-tabs-wrapper .tab ').on('click', function(event) {
  var id = $(this).attr('data-id');
    $('.product__content-tabs-wrapper, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product__content-tabs-wrapper .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#'+id).addClass('active-tab').fadeIn();
    return false;
  });
