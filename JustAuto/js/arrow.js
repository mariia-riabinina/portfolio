$(document).ready(function(){
	$("#arrow").click(function(event) {
		event.preventDefault();
		var id  = $(this).attr('href');
		var height = $(id).offset().top;
		$('body,html').animate({scrollTop: height}, 700);
	});
});