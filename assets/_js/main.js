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
  featureImages: function() {
    $('.feature').each(function(index, $item) {
      const $this = $(this);
      setInterval(function() {
        const numberOfImages = $this.find('.feature-image').length;

        const $activeImage = $this.find('.feature-image.active');
        if ( $activeImage.index()+1 < numberOfImages ) {
          $activeImage.next().addClass('active');
          $activeImage.removeClass('active');
        } else {
          $activeImage.removeClass('active');
          $this.find('.feature-image').first().addClass('active');
        }
      }, 600);
    });
  },
  customizerImages: function() {
    const styles = ['blue', 'orange', 'dark-blue', 'purple'];

    let currentStyle = 0;

    setInterval(() => {
      $('#customize-section').attr('data-style', styles[currentStyle]);
        currentStyle = currentStyle < styles.length-1 ? currentStyle+1 : currentStyle = 0;
    }, 1500);
  },
  init: function() {
    const that = this;
    $(window).on('load', function() {
      that.headerShrink();
      that.headerToggle();
      // that.featureImages();
      // that.customizerImages();
    });
  },
};

Main.init();
