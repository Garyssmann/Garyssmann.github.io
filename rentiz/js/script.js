//==============меню бургер=========================
const burger = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu__body');
const body = document.body;
if (burger && menu) {
	burger.addEventListener('click', () => {
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
		body.classList.toggle('lock');
	})
}
//=================filter dropdown===========
const filter = document.querySelector('.filter');
if (filter) {
	const items = filter.querySelectorAll('.block-filter')
	items.forEach(item => {
		item.addEventListener('click', event => {
			item.querySelector('.block-filter__dropdown').classList.toggle('_active');
			item.querySelector('.block-filter__icon').classList.toggle('_active');
			if (event.target.classList.contains('block-filter__item')) {
				item.querySelector('.block-filter__value').textContent = event.target.textContent;
			}
		})
	})
}
// ===========swiper=======================//
const popularSlider = new Swiper('.popular-slider', {
	spaceBetween: 20,
	slidesPerView: 1,
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.popular-slider-btn__next',
		prevEl: '.popular-slider-btn__prev',
	},
	breakpoints: {
		// when window width is >= 320px
		991.98: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		// when window width is >= 480px
		660: {
			slidesPerView: 2,
			spaceBetween: 30
		},
	}
});
const reviewsSlider = new Swiper('.slider-reviews', {
	spaceBetween: 20,
	slidesPerView: 1,
	autoHeight: true,
	// loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.slider-reviews-btn__next',
		prevEl: '.slider-reviews-btn__prev',
	},
	// breakpoints: {

	// 	991.98: {
	// 		slidesPerView: 3,
	// 		spaceBetween: 20
	// 	},

	// 	660: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 30
	// 	},
	// }
});
// ==========gallery=============
const galleryItems = document.querySelectorAll(".gallery__item");

if (galleryItems.length > 0) {
	galleryItems.forEach(item => {
		new Swiper(item, {
			slidesPerView: 1,
			autoplay: {
				delay: 5000,
			},
			effect: 'fade',
		})
	})
}