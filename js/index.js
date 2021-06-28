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
	navPrimary.classList.remove('block');
	navSecondary.classList.remove('block');
};

const openSubmenu = () => {
	navSecondary.classList.add('block');
};

const closeSubmenu = () => {
	navSecondary.classList.remove('block');
	navPrimary.classList.add('block');
};

const openPanel = (evt, panelName) => {
	let i, tabcontent, tabslider;

	//hide all tabPanels
	tabcontent = document.getElementsByClassName('tab-content');
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none';
	}
	//remove active class from
	tabslider = document.getElementsByClassName('tab-slider');
	for (i = 0; i < tabslider.length; i++) {
		tabslider[i].classList.remove('tab-slider--active');
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(panelName).style.display = 'flex';
	evt.currentTarget.lastElementChild.classList.add('tab-slider--active');
};

const openFootermenu = (evt, id) => {
	evt.currentTarget.lastElementChild.classList.toggle(
		'expander-clickable--expanded'
	);

	let submenu = document.getElementById(id);

	submenu.classList.toggle('height-auto');

	submenu
		.getElementsByClassName('pushdownContent')[0]
		.classList.toggle('hidden');
};

window.onload = document.getElementById('tabLink0').click();
