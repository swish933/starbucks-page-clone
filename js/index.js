let doc = document.querySelector('body');
let header = document.querySelector('header');
let navPrimary = document.querySelector('#primary-nav-panel');
let navSecondary = document.querySelector('#secondary-nav-panel');

const toggleMenu = () => {
	navPrimary.classList.toggle('block');
	doc.classList.toggle('noscroll');

	if (!navSecondary.classList.contains('block')) {
		return;
	}
	nav.classList.remove('block');
	navSecondary.classList.remove('block');
};

const openSubmenu = () => {
	navSecondary.classList.add('block');
};

const closeSubmenu = () => {
	navSecondary.classList.remove('block');
	navPrimary.classList.add('block');
};
