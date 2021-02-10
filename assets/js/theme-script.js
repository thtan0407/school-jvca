// Function thông báo
var call_noti = function (msg, type, time, position) {
	if (typeof time === 'undefined' || isNaN(time))
		time = 3000;
	toastr.options.timeOut = time;
	toastr.options.extendedTimeOut = time;
	if (position)
		toastr.options.positionClass = position;
	else if ($(window).width() < 765)
		toastr.options.positionClass = "toast-bottom-full-width";
	toastr[type](msg);
};

$(document).ready(function () {
	let blogMain = new Swiper('#swiper-mainblog', {
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
	});
	let newspaper = new Swiper('#swiper-newspaper', {
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
	});
	var partner = new Swiper('#swiper-partner', {
		slidesPerView: 3,
		navigation: {
			nextEl: '.story .swiper-button-next',
			prevEl: '.story .swiper-button-prev',
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 5,
				spaceBetween: 15,
			},
		}
	});
})