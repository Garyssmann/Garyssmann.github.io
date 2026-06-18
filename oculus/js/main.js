'use strict';

const tabItems = document.querySelectorAll('.tabs__btn-item');
const tabsContent = document.querySelectorAll('.tabs__content-item');
const tabContainer = document.querySelector('.tabs');

tabContainer.addEventListener('click', (event) => {
	const tabTarget = event.target.closest('.tabs__btn-item');
	if (!tabTarget) return;

	const button = tabTarget.dataset.button;

	tabItems.forEach(function (item) {
		item.classList.remove('tabs__btn-item_active');
	});
	tabsContent.forEach(function (item) {
		item.classList.remove('tabs__content-item_active');
	});

	tabTarget.classList.add('tabs__btn-item_active');
	document.querySelector(`#${button}`).classList.add('tabs__content-item_active');
});

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');


menuBtn.addEventListener('click', () => {
	// menuBtn.classList.toggle('menu-btn_active');
	menu.classList.toggle('menu_active');
})