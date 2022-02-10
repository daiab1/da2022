 //scroll top
    $(document).ready(function(){
	$('.btnTop').click(function(){
		$('html, body').animate({scrollTop : 0},600);
		return false;
	});

	setTimeout(function(){
		$('.footer_bottom').addClass('active');
	}, 300);
    });