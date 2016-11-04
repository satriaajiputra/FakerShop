$(document).ready(function() {
	var obj = $('.right-bar');
	$('#burger').click(function(e) {
		e.preventDefault();
		obj.animate({
			right: 0,
		}, 300);
		if($(this).find('i').attr('class') == "fa fa-bars") {
			$(this).find('i').removeClass('fa-bars');
			$(this).find('i').addClass('fa-times');
		} else {
			obj.animate({
				right: '-25%',
			}, 300);
			$(this).find('i').removeClass('fa-times');
			$(this).find('i').addClass('fa-bars');
		}
	});
});
$(document).ready(function() {
	var element = $('#product-thumbnail');
	var btn = $('#plus');
	var min = $('#minus');

	btn.click(function() {
		element.find('img').animate({
			width: '+=20%'
		}, 200);
	});

	min.click(function() {
		element.find('img').animate({
			width: '-=20%'
		}, 200);
	});
});
$(document).ready(function() {
	$('a[role="goso"]').click(function(e) {
        if($(this).hash !== '') {
            e.preventDefault();
            var hash = this.hash;
            console.log(this.hash);
            $('html, body').animate({
                scrollTop : $(hash).offset().top
            }, 400, function(){
   
            // Add hash (#) to URL when done scrolling (default click behavior)
            // window.location.hash = hash;
          });
        }
    });
});