jQuery.noConflict();

jQuery(document).ready(function(){
	//close button prototype
	var jQuery.hideButton = jQuery('<button/>').wrapInner('X').attr({
		'class' : 'hideButton',
		'position' : 'absolute',
		'top' : '0px',
		'right' : '0px',
		}).hide();

	//add button
	jQuery('div').each(function(){
		jQuery(this).append(jQueryhideButton.clone());
	});

	//hide and show button on div
	jQuery('div').mouseover(function(){
		jQuery(this).children('button.hideButton').show();
	}).mouseout(function(){
		jQuery(this).children('button.hideButton').hide();
	});

	//click on button event
	jQuery('button.hideButton').click(function(){
		jQuery(this).parent().hide();
	});
	alert('deleteAds added successfully!');
});
