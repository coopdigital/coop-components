(function() {

  'use strict';

  window.Coop = window.Coop || { Modules: {} };

  var selector = '[data-cookie-notice]';

  Coop.Modules.cookieNotice = {
    notice:null,
    init:function(){
      this.notice = $(selector);

      if(this.notice.length){

        // set cookie-notice cookie for 365 days
        var d = new Date();
        d.setTime(d.getTime() + (365*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = "cookie-notice=true; " + expires + "; path=/";

        this.bindevents();
      }
    },
    bindevents:function(){
      var self = this;

      $(window).scroll(function(){
        self.notice.delay(250).fadeOut();
      });
    }
  };
}());
