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
