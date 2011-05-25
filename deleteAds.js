jQuery.noConflict();
jQuery("div[id^='ad']").each(function(i){
  jQuery(this).hide();
});