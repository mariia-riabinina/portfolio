$(document).ready(function(){
	$('#catalogue').find('h3').click(function() {
		if (!$(this).hasClass('active')) {
			var activeItem = $('#catalogue').find('h3.active');
			activeItem.next('.cover').slideToggle(400);
			$(this).next('.cover').slideToggle(400);
			activeItem.toggleClass('active');
			$(this).toggleClass('active');
			$('#catalogue').css('background-image', 'url("img/bg-' + this.id + '.jpg")');
		}
	});
});