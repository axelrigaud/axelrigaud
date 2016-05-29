$(document).ready(function(){
  $('#loader-wrapper').fadeOut();
  setTimeout(showParagraphs, 1000);
  function showParagraphs() {
    $('#whatido p').each(function(index, element){
      setTimeout(function() {
        $(element).addClass('fade-from-top');
      }, index*250);
    });
  }
});
