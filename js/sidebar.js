$(function () {
    var sidebar = $('.sidebar');
    var top = parseFloat(sidebar.css('height'));

    $(window).scroll(function (event) {
      var y = $(this).scrollTop();
      if (y >= top) {
        sidebar.addClass('fixed');
      } else {
        sidebar.removeClass('fixed');
      }
    });
});
