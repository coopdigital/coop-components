describe('Cookie notice module', function() {
  var $fixture =  $('<div class="banner banner-dark banner-fixed-bottom" data-cookie-notice="">'+
        '<div class="wrap">'+
            '<p class="centered">This site uses cookies. By continuing to use this site you’re agreeing to <a'+ 'href="http://www.coop.co.uk/cookies/">our cookie policy</a>. </p>'+
        '</div>'+
    '</div>');

  beforeAll(function() {
    $('body').append($fixture);
    Coop.Modules.cookieNotice.init();
  });

  afterAll(function() {
    $('.fixture').remove();
  });

  it('should set a cookie called `cookie-notice`', function() {
    expect(/^(.*;)?\s*cookie-notice\s*=/.test(document.cookie)).toBe(true);
  });

  it('should fade out the notice on scroll', function() {
    spyOn($.prototype, 'fadeOut');
    $(window).scroll();

    expect($.prototype.fadeOut).toHaveBeenCalled();
  });
});