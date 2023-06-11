const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
	// alert("Plz Subscribe ");
	nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());



// =========================================
//  creating a portfolio tabbed component
// =========================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
	const p_btn_clicked = e.target;
	console.log(p_btn_clicked);

	if (!p_btn_clicked.classList.contains("p-btn")) return;

	p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

	p_btn_clicked.classList.add("p-btn-active");

	//=============================
	// to find the number in data attr
	//=============================

	const btn_num = p_btn_clicked.dataset.btnNum;
	console.log(btn_num);

	const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

	p_img_elem.forEach((curElem) => curElem.classList.add("p-img-not-active"));

	img_active.forEach((curElem) =>
		curElem.classList.remove("p-img-not-active")
	);
});

//====================
// swiper js code
//=======================

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 2,
	spaceBetween: 30,

	autoplay: {
		delay: 2500,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

const myJsMedia = (widthSize) => {
	if (widthSize.matches) {
		new Swiper(".mySwiper", {
			slidesPerView: 1,
			spaceBetween: 30,

			autoplay: {
				delay: 3500,
			},
		});
	} else {
		new Swiper(".mySwiper", {
			slidesPerView: 2,
			spaceBetween: 30,
		});
	}
};




const widthSize = window.matchMedia("(max-width:49em)");

myJsMedia(widthSize);

widthSize.addEventListener("change", myJsMedia);


//==============================
//   Scroll-top button section
//==============================

const herosection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrollElement);

const scrollTop = () => {
	herosection.scrollIntoView({ behavior: "smooth" });
};


scrollElement.addEventListener("click", scrollTop);



const worksection = document.querySelector(".section-work-services");

const countObserver = new IntersectionObserver(
	(entries) => {
		const ent = entries[0];
		//   console.log(ent);
		if (!ent.isIntersecting) return;

		// Animated Number section

		const counterNumber = document.querySelectorAll(".counter-numbers");

		const speed = 200;

		counterNumber.forEach((curElem) => {
			const updateNumber = () => {
				const targetNumber = parseInt(curElem.dataset.number);
				// console.log(targetNumber);

				const initialNum = parseInt(curElem.innerText);
				// console.log(initialNum);

				const incrementNum = Math.trunc(targetNumber / speed);
				// console.log(incrementNum);

				if (initialNum < targetNumber) {
					curElem.innerText = `${initialNum + incrementNum} +`;

					setTimeout(updateNumber, 10);
				}
			};

			updateNumber();

		});

		countObserver.unobserve(worksection);

	},
	{
		root: null,
		threshold: 0,
	}
);

countObserver.observe(worksection);


// ========================================
// creating a sticky responsive navbar component
// ========================================

const observer = new IntersectionObserver(
	(entries) => {
		const ent = entries[0];
		//   console.log(ent);
		!ent.isIntersecting
			? document.body.classList.add("sticky")
			: document.body.classList.remove("sticky");
	},
	{
		root: null,
		threshold: 0,
	}
);

observer.observe(herosection);