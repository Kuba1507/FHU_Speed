const swiper = new Swiper('.testimonials-swiper', {
	autoplay: {
		delay: 2500,
	},
	direction: 'horizontal',
	loop: true,
	spaceBetween: 30,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	breakpoints: {
		767: {
			slidesPerView: 2,
		},

		992: {
			slidesPerView: 3,
		},
	},
})

const partnersSwiper = new Swiper('.partners-swiper', {
	slidesPerView: '2',
	spaceBetween: 30,
	loop: true,
	centeredSlides: true,
	speed: 8000,
	allowTouchMove: false,
	disableOnInteraction: false,
	autoplay: {
		delay: 0.5,
	},

	breakpoints: {
		767: {
			slidesPerView: 3,
		},

		992: {
			slidesPerView: 6,
		},
	},
})
