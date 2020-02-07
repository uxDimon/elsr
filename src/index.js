import "./styles.scss";
import Swiper from "swiper";
import "../node_modules/swiper/css/swiper.min.css";

for (let i of document.querySelectorAll(".input-text__input-area")) {
	// Добавляет класс к 'label > span' если в input есть значение
	i.onchange = function() {
		if (i.value != "") {
			i.nextElementSibling.classList.add("input-text__placeholder-mimicry_up");
		} else {
			i.nextElementSibling.classList.remove("input-text__placeholder-mimicry_up");
		}
	};
}

let close_area_hamburger = document.createElement("div");
close_area_hamburger.classList.add("close-area-hamburger");
document.body.append(close_area_hamburger);

let hamburger_icon = document.querySelector(".hamburger");
let hamburger_manu = document.querySelector(".hamburger-manu");

function open_close() {
	hamburger_icon.classList.toggle("is-active");
	hamburger_manu.classList.toggle("hamburger-manu_active");
	close_area_hamburger.classList.toggle("close-area-hamburger_active");
}

hamburger_icon.addEventListener("click", function() {
	open_close();
});

close_area_hamburger.addEventListener("click", function() {
	open_close();
});

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
	slidesPerGroup: 1,
	spaceBetween: 20,
	breakpoints: {
		// when window width is >= 1140px
		1140: {
			slidesPerView: 4
		},
		// when window width is >= 840px
		840: {
			slidesPerView: 3
		},
		// when window width is >= 540px
		540: {
			slidesPerView: 4
		},
		// when window width is >= 360px
		360: {
			slidesPerView: 3
		}
	},

	navigation: {
		nextEl: ".review-block__swiper-container_1 > .review-block__button_next",
		prevEl: ".review-block__swiper-container_1 > .review-block__button_prev"
	}
});
var swiper2 = new Swiper(".review-block__swiper-container_2 > .swiper-container", {
	// Optional parameters
	slidesPerGroup: 1,
	spaceBetween: 20,
	breakpoints: {
		// when window width is >= 1140px
		1140: {
			slidesPerView: 4
		},
		// when window width is >= 840px
		840: {
			slidesPerView: 3
		},
		// when window width is >= 540px
		540: {
			slidesPerView: 4
		},
		// when window width is >= 360px
		360: {
			slidesPerView: 3
		}
	},

	navigation: {
		nextEl: ".review-block__swiper-container_2 > .review-block__button_next",
		prevEl: ".review-block__swiper-container_2 > .review-block__button_prev"
	}
});
