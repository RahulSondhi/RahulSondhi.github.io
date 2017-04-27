$(function () {
    var sidebar = $('.sidebar');
    var top = sidebar.offset().top + parseFloat(sidebar.css('height'));
    var top2 = parseFloat(sidebar.css('height'));

    $(window).scroll(function (event) {
      var y = $(this).scrollTop();
      if (y >= top2) {
        sidebar.addClass('fixed');
      } else {
        sidebar.removeClass('fixed');
      }
    });
});
