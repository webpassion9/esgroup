document.addEventListener('DOMContentLoaded', () => {
	const mobileMenuButtons = document.querySelectorAll('.btn-mobile-menu');
	const headerBar = document.querySelector('.header__bar');
	const body = document.body;

	mobileMenuButtons.forEach(button => {
			button.addEventListener('click', () => {
					body.classList.toggle('menu-active');
					headerBar.classList.toggle('open');
					if (body.classList.contains('menu-active')) {
							body.style.overflow = 'hidden';
					} else {
							body.style.overflow = '';
					}
					
			});
	});
});


document.addEventListener("DOMContentLoaded", function() {
	const langContainer = document.querySelector(".header__lang");
	const langBtn = document.querySelector(".header__lang-btn");

	langBtn.addEventListener("click", function(event) {
			event.stopPropagation();
			langContainer.classList.toggle("active");
	});

	document.addEventListener("click", function(event) {
			if (!langContainer.contains(event.target)) {
					langContainer.classList.remove("active");
			}
	});

	langList.addEventListener("click", function(event) {
			event.stopPropagation();
	});
});


// fancybox

Fancybox.bind("[data-fancybox]", {});