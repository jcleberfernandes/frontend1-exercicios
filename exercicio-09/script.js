document.addEventListener('DOMContentLoaded', () => {
	new Splide('.splide', {
		type: 'loop',
		perPage: 1,
		autoplay: true,
		interval: 2500,
		arrows: true,
		pagination: true,
		speed: 700,
	}).mount();

	AOS.init({
		duration: 800,
		once: true,
	});
});
const lightbox = Gligthbox()