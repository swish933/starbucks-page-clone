const toggleMenu = () => {
	let doc = document.querySelector('body');
	let nav = document.querySelector('#primary-nav-panel');
	let navSecondary = document.querySelector('#secondary-nav-panel');
	nav.classList.toggle('block');
	doc.classList.toggle('noscroll');

	if (!navSecondary.classList.contains('block')) {
		return;
	}
	nav.classList.remove('block');
	navSecondary.classList.remove('block');
};

const openSubmenu = () => {
	let navPrimary = document.querySelector('#primary-nav-panel');
	let navSecondary = document.querySelector('#secondary-nav-panel');
	navSecondary.classList.add('block');
};

const closeSubmenu = () => {
	let navPrimary = document.querySelector('#primary-nav-panel');
	let navSecondary = document.querySelector('#secondary-nav-panel');

	navSecondary.classList.remove('block');
	navPrimary.classList.add('block');
};
