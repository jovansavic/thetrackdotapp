import $ from 'jquery';

const Main = {
  headerShrink: function() {
    if ( $(window).width() > 1 ) {
      $(window).on('scroll', function() {
          if ( $(window).scrollTop() > 200 ) {
            $('.site-header').addClass('scrolled');
          } else {
            $('.site-header').removeClass('scrolled');
          }
      });
    }
  },
  headerToggle: function() {
    $('#menu-toggle').on('click', () => {
      $('.mobile-header, .menu-toggle').toggleClass('animated');
    });
  },
  init: function() {
    const that = this;
    $(window).on('load', function() {
      that.headerShrink();
      that.headerToggle();
    });
  },
};

Main.init();
