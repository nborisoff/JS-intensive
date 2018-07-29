window.addEventListener('DOMContentLoaded', function() {
	// Получение информации для работы
	let products = document.querySelectorAll('.product'),
		buttons = document.getElementsByTagName('button'),
		open = document.getElementsByClassName('open')[0];

	// Функция для создания корзины
	function createCart() {
		// Создание элементов для корзины
		let cart = document.createElement('div'),
			field = document.createElement('div'),
			heading = document.createElement('h2'),
			close = document.createElement('button');
		// Добавление классов элементам	
		cart.classList.add('cart');
		field.classList.add('cart-field');
		close.classList.add('close');

		// Добавление текста к элементам
		close.textContent = "Закрыть";
		heading.textContent = "В нашей корзине:";

		//Добавление элементов на страницу
		document.body.appendChild(cart);
		cart.appendChild(heading);
		cart.appendChild(field);
		cart.appendChild(close);

	}

	createCart();

	let field = document.querySelector('.cart-field'),
		cart = document.querySelector('.cart'),
		close = document.querySelector('.close'),
		shop = document.querySelector('.shop');

	for (let i = 0; i < buttons.length-1; i++) {
		// Вешаем обработчик события клика на каждую из кнопок
		buttons[i].addEventListener('click', function() {
			let item = products[i].cloneNode(true),
				btn = item.querySelector('button');

			btn.textContent = "Удалить!";
			field.appendChild(item);
			products[i].remove();

			btn.addEventListener('click', function() {
				let cItem = item.cloneNode(true),
					cBtn = cItem.querySelector('button');

				cBtn.textContent = "Купить!";
				shop.appendChild(cItem);
				item.remove();
			})
		})
	}

	function openCart() {
		cart.style.display = 'block'
	}

	function closeCart() {
		cart.style.display = 'none'
	}

	open.addEventListener('click', openCart);
	close.addEventListener('click', closeCart);
});