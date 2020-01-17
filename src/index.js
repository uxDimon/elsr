import "./styles.scss";
import Swiper from "swiper";
import "../node_modules/swiper/css/swiper.min.css";

var mySwiper = new Swiper(".swiper1", {
	// https://swiperjs.com/api
	// Optional parameters
	loop: true,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination"
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	}
});
