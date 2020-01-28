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
