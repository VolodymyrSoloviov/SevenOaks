$(function () {
	$('.menu-adaptive').on('click', function(e) {
		e.preventDefault();

			$('.menu').removeClass('popup');

	});
});

$(function () {
	$('.menu__close').on('click', function(e) {
		e.preventDefault();

		$('.menu').addClass('popup');

	});
});