$(document).ready(function(){
  $(window).on('load', function(){
    $('#loader-wrapper').fadeOut('slow',showHeader);
    function showHeader() {
      $('h1').addClass('appear-from-top');
    }
    setTimeout(showParagraphs, 1000);
    function showParagraphs() {
      $('#whatido p').each(function(index, element){
        setTimeout(function() {
          $(element).addClass('fade-from-top');
        }, index*250);
      });
    }
  });

  //ga
  $('a').on('click', function(e){
    trackOutboundLink($(this).attr('href'));
  });

  var trackOutboundLink = function(url) {
    ga('send', 'event', 'outbound', 'click', url, {'hitCallback':
      function () {
      document.location = url;
      }
    });
  }
})
