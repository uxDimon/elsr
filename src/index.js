import "./styles.scss";
import Swiper from "swiper";
import "../node_modules/swiper/css/swiper.min.css";

var mySwiper = new Swiper(".head-slider > .swiper-container", {
	// https://swiperjs.com/api
	// Optional parameters
	loop: true,
	effect: "fade",
	speed: 500,

	fadeEffect: {
		crossFade: false
	},

	autoplay: {
		delay: 5000
	},

	// Navigation arrows
	navigation: {
		nextEl: ".head-slider__button_next",
		prevEl: ".head-slider__button_prev"
	}
});

var swiper1 = new Swiper(".review-block__swiper-container_1 > .swiper-container", {
	// Optional parameters
	slidesPerView: 4,
	spaceBetween: 20,
	slidesPerGroup: 1,

	navigation: {
		nextEl: ".review-block__swiper-container_1 > .review-block__button_next",
		prevEl: ".review-block__swiper-container_1 > .review-block__button_prev"
	}
});
var swiper2 = new Swiper(".review-block__swiper-container_2 > .swiper-container", {
	// Optional parameters
	slidesPerView: 4,
	spaceBetween: 20,
	slidesPerGroup: 1,

	navigation: {
		nextEl: ".review-block__swiper-container_2 > .review-block__button_next",
		prevEl: ".review-block__swiper-container_2 > .review-block__button_prev"
	}
});
