$(window).scroll(function () {
	var top = jQuery(document).scrollTop();
	var height = 0;
	
	if (top > height) {
		$('.header').addClass('header-sticky animated fadeInDown');
	} else {
		$('.header').removeClass('header-sticky animated fadeInDown');
	}
	
	
	if ($(this).scrollTop() > 100) {
		$('.float-contact').fadeIn();
		$('#return-to-top').fadeIn();
	} else {
		$('float-contact').fadeOut();
		$('#return-to-top').fadeOut();
	}
	
	if ($(window).scrollTop() + $(window).height() == $(document).height()) {
		$('.float-contact').fadeOut();
	}
});

$(document).on('click', '#return-to-top', function () {
	$("html, body").animate({scrollTop: 0}, 750);
	return false;
});


$(document).ready(function () {
	$(document).on('click', '#return-to-top', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});
	
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
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
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
	
	var intro01 = new Swiper('#swiper-imageIntro01', {
		slidesPerView: 4,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},
		}
	});
	
	var intro02 = new Swiper('#swiper-imageIntro02', {
		slidesPerView: 4,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},
		}
	});
	
	var slideEvent = new Swiper('#swiper-event', {
		freeMode: true,
		direction: 'horizontal',
		loopFillGroupWithBlank: true,
		loop: true,
		speed: 80000,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		}
	});
	
})