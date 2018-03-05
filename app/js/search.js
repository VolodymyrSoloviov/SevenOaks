$(function () {
	$('.search__link').on('click', function(e) {
		e.preventDefault();

		if(!$('.search').hasClass('search_active')) {
			$('.search').addClass('search_active');
		} else {
			$('.search').removeClass('search_active');
		}

	});
});