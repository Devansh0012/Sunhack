$('.drawer-toggle').click(function(e) {
  $('.drawer').toggleClass('active');
  e.preventDefault();
});
document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    $('.drawer').toggleClass('active');
  }
};
/* Animate to begin (for codepen preview) */

window.onload = setTimeout(function() {
  $('.drawer').addClass('active');
}, 1000);