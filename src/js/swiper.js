const swiper = new Swiper('.testimonials-swiper', {
	// Optional parameters
	autoplay: {
		delay: 2500,
	},
	direction: 'horizontal',
	loop: true,
	spaceBetween: 30,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// Breakpoitns
	breakpoints: {
		767: {
			slidesPerView: 2,
		},

		992: {
			slidesPerView: 3,
		},
	},
})
