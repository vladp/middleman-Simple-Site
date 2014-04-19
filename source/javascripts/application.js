// vsp comments are required as per https://github.com/twbs/bootstrap-sass

// Loads all Bootstrap javascripts
//= require bootstrap

(function() {
  key('⌘+shift+1', function() {
    return $('.container').toggleClass('show-grid');
  });

  key('⌘+shift+2', function() {
    return $('body').toggleClass('show-rhythm');
  });

}).call(this);
