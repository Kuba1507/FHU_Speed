const swiper = new Swiper('.testimonials-swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
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
			slidesPerView: 4,
		},
	},
})
