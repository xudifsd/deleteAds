jQuery.noConflict();
var deletedNum = 0;
jQuery("div[id^='ad']").each(function(i){
  jQuery(this).hide();
  deletedNum += 1;
});
alert("deleted " + deletedNum + " ads");