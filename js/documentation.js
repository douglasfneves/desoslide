// [BEGIN] documentation demo
$(function() {

	
	$('#go_to_step1').on('click', function() {
		$('ul.nav-tabs a:first').tab('show');
	});
	
	$('#wizard_thumbs').desoSlide({
		mainImage: '#wizard_mainImage',
		displayCaption: 'always'
	});
	
	$('#ex1_thumbs').desoSlide({
		mainImage: '#ex1_mainImage',
		firstImg: 1,
		enableCaption: false,
		enableControls: false
	});
	
	$('#ex2_thumbs').desoSlide({
		mainImage: '#ex2_mainImage',
		displayCaption: 'hover'
	});
	
});
// [END] documentation demo