
(function($){
  $.fn.imageSlider = function(options) {
    let settings = $.extend({
      interval: 2000,
      slide: 'auto'
    }, options);

    let intervals;
    let currentSlide = 0;
    let currentBullet = 0;
    if (settings.slide === 'auto') {
      intervals = window.setInterval(nextImg, settings.interval)
    } else {
      clearInterval(nextImg, settings.interval)
    }
    // set up initial state
    // first, hide all img elements
    $('img').hide();

    // then show currentslide that is the start index is 0 as eq() function is 
    $('img').eq(currentSlide).show();
    $('.bullet').eq(currentBullet).addClass('active')

    // make sliding to next image function
    function nextImg() {
      // how the code works
      $('.bullet').removeClass('active')
      // first step: hide current slide that is index 0
      $('img').eq(currentSlide).hide().removeClass('active');
      $('.bullet').eq(currentBullet).removeClass('active')

      // second : update current slide index after modulo calculation
      currentSlide = (currentSlide + 1) % $('img').length;
      currentBullet = (currentBullet + 1) % $('.bullet').length;

      // show new slide
      $('img').eq(currentSlide).fadeIn().addClass('active')
      $('.bullet').eq(currentBullet).addClass('active')
    }

    function prevImg() {
      $('.bullet').removeClass('active')
      // hide current slide
      $('img').eq(currentSlide).hide().removeClass('active');
      $('.bullet').eq(currentBullet).removeClass('active')

      // update current slide index
      currentSlide = (currentSlide - 1) % $('img').length;
      currentBullet = (currentBullet - 1) % $('.bullet').length;

      // show new slide
      $('img ').eq(currentSlide).fadeIn().addClass('active')
      $('.bullet').eq(currentBullet).addClass('active');
    }
    $('.right-button').on('click', function() {
      nextImg()
      window.clearInterval(intervals)
      if (settings.slide === 'auto') {
        intervals = window.setInterval(nextImg, settings.interval)
      }
    })
    $('.left-button').on('click', function() {
      prevImg()
      window.clearInterval(intervals)
      if (settings.slide === 'auto') {
        intervals = window.setInterval(nextImg, settings.interval)
      }
    });
    $(".bullet").on("click", function() {
    // console.log($(this).index())
      $('img').hide().removeClass('active')
      currentSlide = $(this).index()-1;
      currentBullet = $(this).index()-1;
      nextImg()
      window.clearInterval(intervals)
      if (settings.slide === 'auto') {
        intervals = window.setInterval(nextImg, settings.interval)
      }
    })

  }
})(jQuery);


