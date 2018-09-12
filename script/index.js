/*********************************************************************
** Assignment: Final Project
** Author: Charles Ledbetter
** Date: 11/19/2017
** Description: script for index.html
*********************************************************************/
//light loader initialization
$('#lightSlider').lightSlider({
  gallery: false,
  item: 1,
  auto: true,
  vThumbWidth: 0,
  pause: 8000,
  speed: 3000,
  loop: true,
  slideMargin: 0
});

//scrollify initialization
$(function() {
  $.scrollify({
    section:".panel",
    easing:"swing",
    scrollbars:false
  });
});
