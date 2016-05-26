jQuery(document).ready(function($) {

  /* ======= Scrollspy ======= */
  $('body').scrollspy({
    target: '#header',
    offset: 400
  });

  /* ======= Fixed header when scrolled ======= */

  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > 50) {
      $('#header').addClass('navbar-fixed-top');
    } else {
      $('#header').removeClass('navbar-fixed-top');
    }
  });

  /* ======= ScrollTo ======= */
  $('a.scrollto').on('click', function(e) {
    // Do not throw the event if we are on a page of the blog.
    if (document.location.toString().indexOf('/blog/') == -1) {
      var target = this.hash;
      e.preventDefault();
      $('body').scrollTo(target, 800, {
        offset: -70,
        'axis': 'y',
        easing: 'easeOutQuad'
      });
      //Collapse mobile menu after clicking
      if ($('.navbar-collapse').hasClass('in')) {
        $('.navbar-collapse').removeClass('in').addClass('collapse');
      }
    }
  });

});
